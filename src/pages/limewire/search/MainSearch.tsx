import '../search/MainSearch.css';

export default function MainSearch() {
  return (
    <div className="main-search-wrapper">
      <div className="container">
        {/* Header */}
        <div className="search-results-header">
          <div>Quality</div>
          <div>#</div>
          <div>Type</div>
          <div>Name</div>
          <div>Length</div>
          <div>Speed</div>
          <div>Size</div>
          
        </div>

        {/* Scrollable results */}
        <div className="search-results-container">
          {Array.from({ length: 12 }).map((_, i) => (
            <div className="search-results-body" key={i}>
              <div>⭐⭐⭐</div>
              <div>{i + 1}</div>
              <div>mp3</div>
              <div>Dj Fritzy - Kick the Rain When It Begins to Fall</div>
              <div>3:53</div>
              <div>T3 or Higher</div>
              <div>9 MB</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="big-btns-container">
        <button className='lw-bottom-btn'>
            <img src='Images/limewire_arrow.png'/>
            Download
        </button>
        <button className='lw-bottom-btn'>
            <img src='Images/limewire_browse_host.png'/>
            Browse Host
        </button>
        <button className='lw-bottom-btn'>
            <img src='Images/limewire_stop_search.png'/>
            Stop Search
        </button>
        <button>
            Junk
        </button>
      </div>
    </div>
  );
}
