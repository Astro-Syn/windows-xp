import '../limewire/LimewireNavTwo.css';

export default function LimewireNavTwo() {
    return (
        <div>
            <nav className='second-nav'>
                <button>
                    <img
                    className='limewire_images'
                    src='/Images/limewire_search.png'
                    />
                    <p>Search</p>
                </button>
                <button>
                    <img
                    className='limewire_images'
                    src='/Images/limewire_monitor.png'
                    />
                    <p>Monitor</p>
                </button>
                <button>
                    <img
                    className='limewire_images'
                    src='/Images/limewire_library.png'
                    />
                    <p>Library</p>
                </button>
                <div className='logo-container'>
                    <img
                    className='lw-logo'
                    src='/Images/limewire_writing.png'
                    />
                </div>
            </nav>
        </div>
    )
}