import '../msn_nav/MsnNav.css';

export default function MsnNav() {
    return (
        <div>
            <div className='msn-nav-container'>
                <nav className='msn-first-nav'>
                    <ul>
                        <li>File</li>
                        <li>Contacts</li>
                        <li>Actions</li>
                        <li>Tools</li>
                        <li>Help</li>
                    </ul>
                </nav>
                <nav className='msn-second-nav'>
                    <div className='first-row'>
                        <button>arrow</button>
                        image here 
                        
                        <p>Messenger</p>
                    </div>
                    <div className='second-row'>
                        <div className='image-container'>
                            <img
                        className='msn-display-pic'
                        src='/Images/login_duck.png'
                        />
                        </div>
                        <div className='name-main-container'>
                            <p>Name Here</p>
                            <p>Type a personal message</p>
                            <p>Envelope</p>
                        </div>

                    </div>
                    


                </nav>
                
            </div>
        </div>
    )
}