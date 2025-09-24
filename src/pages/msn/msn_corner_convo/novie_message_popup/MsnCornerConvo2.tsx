import React, {useEffect, useRef, useState} from 'react';
import '../MsnCornerConvo.css';

type Props = {
    title?: string;
    message?: string;
    onClose?: () => void;
    show?: boolean;
    duration?: number;
    inMs?: number;
    outMs?: number;
    headerIconSrc?: string;
    avatarSrc?: string;
    logoSrc?: string;
};

export default function MsnCornerConvo2({
    title = 'MSN Messenger',
    message = 'Hey!',
    onClose,
    duration = 1000,
    show = true,
    inMs = 900,
    outMs = 860,
    headerIconSrc = '/Images/tiny_msn_full.png',
    avatarSrc = '/Images/login_fish.png',
    logoSrc = '/Images/msn_logo.png',
}: Props) {

    const [mounted, setMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const timerRef = useRef<number | null>(null);


    useEffect(() => {
        if(show) {
            setMounted(true);

            requestAnimationFrame(() => setIsVisible(true));
        } else {
            setIsVisible(false);
        }
    }, [show]);

    useEffect(() => {
        if(!isVisible) return;
        if (timerRef.current) {
            window.clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        timerRef.current = window.setTimeout(() => {
            setIsVisible(false);
        }, duration);

        return () => {
            if(timerRef.current) {
                window.clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [isVisible, duration]);

    const pause = () => {
        if(timerRef.current) {
            window.clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    const resume = () => {
        if (!isVisible) return;
        timerRef.current = window.setTimeout(() => setIsVisible(false), 1500);
    };

    const handleAnimationEnd: React.AnimationEventHandler<HTMLDivElement> = (e) => {
        if(!isVisible) {
            setMounted(false);
            onClose?.();
        }
    };

    if(!mounted) return null;

    const boxStyle: React.CSSProperties = {
        animationDuration: `${isVisible ? inMs : outMs}ms`,
    };

  return (
    <div className="corner-convo-container" role="status" aria-live="polite">
      <div
        className={`corner-convo-box ${isVisible ? 'show' : 'hide'}`}
        style={boxStyle}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="corner-convo-box-header">
          <div className="corner-convo-box-header-title">
            <img src={headerIconSrc} alt="" />
            <p>{title}</p>
          </div>
          <button
            className="corner-convo-close"
            aria-label="Close notification"
            onClick={() => setIsVisible(false)}   
          >
            ×
          </button>
        </div>

        <div className="corner-convo-box-content">
          <div className="corner-convo-picture">
            <img src={avatarSrc} alt="" />
          </div>
          <div className="corner-convo-text-content">
            <p className="corner-convo-options">Options</p>
            <p className="corner-convo-message">{message}</p>
            <img src={logoSrc} alt="MSN logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
