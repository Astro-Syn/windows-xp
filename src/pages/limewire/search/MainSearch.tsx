import '../search/MainSearch.css';

export default function MainSearch() {
  const songs = [
    {
      quality: "⭐⭐⭐",
      type: "mp3",
      name: "Metallica - The Memory Remains",
      length: "4:39",
      speed: "T3 or Higher",
      size: "10 MB",
    },
    {
      quality: "⭐⭐⭐⭐",
      type: "mp3",
      name: "Blue Öyster Cult - Don't Fear the Reaper",
      length: "5:08",
      speed: "T3 or Higher",
      size: "12 MB",
    },
    {
      quality: "⭐⭐⭐",
      type: "mp3",
      name: "Smile.dk - Butterfly",
      length: "3:25",
      speed: "T3 or Higher",
      size: "8 MB",
    },
    {
      quality: "⭐⭐⭐⭐",
      type: "mp3",
      name: "Darude - Sandstorm",
      length: "3:46",
      speed: "T3 or Higher",
      size: "9 MB",
    },
    {
      quality: "⭐⭐⭐",
      type: "mp3",
      name: "Led Zeppelin - Tangerine",
      length: "3:12",
      speed: "T3 or Higher",
      size: "8 MB",
    },
    {
      quality: "⭐⭐⭐",
      type: "mp3",
      name: "DDR Mix",
      length: "6:42",
      speed: "T3 or Higher",
      size: "15 MB",
    },
    {
      quality: "⭐⭐",
      type: "mp3",
      name: "Metallica - Enter Sandman",
      length: "3:36",
      speed: "T2 or Higher",
      size: "8 MB",
    },
    {
      quality: "⭐⭐⭐⭐",
      type: "mp3",
      name: "Eiffel 65 - Blue (Da Ba Dee)",
      length: "4:45",
      speed: "T3 or Higher",
      size: "11 MB",
    },
    {
      quality: "⭐⭐⭐",
      type: "mp3",
      name: "Daft Punk - One More Time",
      length: "5:21",
      speed: "T3 or Higher",
      size: "12 MB",
    },
    {
      quality: "⭐⭐",
      type: "mp3",
      name: "90s mix",
      length: "15:08",
      speed: "T2 or Higher",
      size: "7 MB",
    },
    {
      quality: "⭐⭐⭐⭐",
      type: "mp3",
      name: "Cascada - Everytime we Touch",
      length: "3:30",
      speed: "T3 or Higher",
      size: "8 MB",
    },
    {
      quality: "⭐⭐⭐",
      type: "mp3",
      name: "90's Kandi Rave Mix",
      length: "25:28",
      speed: "T3 or Higher",
      size: "13 MB",
    },
  ];

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
          {songs.map((song, i) => (
            <div className="search-results-body" key={i}>
              <div>{song.quality}</div>
              <div>{i + 1}</div>
              <div>{song.type}</div>
              <div>{song.name}</div>
              <div>{song.length}</div>
              <div>{song.speed}</div>
              <div>{song.size}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="big-btns-container">
        <button className="lw-bottom-btn">
          <img src="Images/limewire_arrow.png" />
          Download
        </button>

        <button className="lw-bottom-btn">
          <img src="Images/limewire_browse_host.png" />
          Browse Host
        </button>

        <button className="lw-bottom-btn">
          <img src="Images/limewire_stop_search.png" />
          Stop Search
        </button>

        <button>
          Junk
        </button>
      </div>
    </div>
  );
}