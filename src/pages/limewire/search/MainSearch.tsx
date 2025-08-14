import '../search/MainSearch.css'

export default function MainSearch() {
    return (
        <div>
            
            <div className='container'>
                <div>
                    <div className='search-results-header'>
                            <button>Quality</button>
                            <button>#</button>
                            <button>_</button>
                            <button>Name</button>
                            <button>Type</button>
                            <button>Size</button>
                            <button>Speed</button>
                            <button>Location</button>
                            <button>Bitrate</button>
                        </div>

                    <div className='search-results-body'>
                        <div>Radiohead</div>
                        <div>Creep</div>
                        <div>Pablo Honey</div>
                        <div>Alternative</div>
                        <div>3:58</div>
                        <div>320 kbps</div>
                        <div>9 MB</div>
                        <div>12 sources</div>

                    </div>
                
                </div>
                
            </div>
            <div className='big-btns-container'>
                <button>Download</button>
                <button>Browse Host</button>
                <button>Stop Search</button>
                <button>Junk</button>
            </div>
            
        </div>
    )
}