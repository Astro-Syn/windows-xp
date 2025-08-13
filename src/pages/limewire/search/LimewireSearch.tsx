import '../search/LimewireSearch.css';

export default function LimewireSearch () {
    return (
        <div>
            <div className='search-container'>
                <div className='artist-info-container'>
                    <p className='filter-results'>Filter Results:</p>
                    <div className='media-container'>
                        <div>
                            <p className='search-title'>Media</p>
                            <div className='ul-container'>
                                
                                <ul className='search-cat'>
                                    <li>All(3)</li>
                                    <li>Audio</li>
                                    <li>Programs</li>
                                    <li>Video</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='artist-container'>
                        <div className='artist-container-inner'>
                            <p className='search-title'>Artist</p>
                            <div className='ul-container'>
                                <ul className='search-cat'>
                                    <li>Infected Mushroom</li>
                                    <li>DJ Tiesto</li>
                                    <li>Smile.Dk</li>
                                    <li>DDR</li>
                                    <li>D-Tune</li>
                                    <li>Scooter</li>
                                    <li>Darude</li>
                                    <li>Korn</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='album-container'>
                        <div>
                            <p className='search-title'>
                                Album
                            </p>
                            <div className='ul-container'>
                                <ul className='search-cat'>
                                    <li>DDR</li>
                                    <li>Dance Hits</li>
                                    <li>Follow The Reaper</li>
                                    <li>90s Dance</li>
                                    <li></li>
                                </ul>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className='search-btn-container'>
                                <button>Back to Search</button>
                            </div>

                </div>
                
            </div>
        </div>
    )
}