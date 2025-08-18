import React, { useEffect, useState } from 'react';

const video="http://localhost:3000/video"
function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch video data from your local JSON server
    fetch(video)
      .then((response) => response.json())
      .then((data) => {
        const videoArray = data.videos || data; 
        setVideos(videoArray);
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  return (
    <div>
      <h1>Video List</h1>
      {videos.length === 0 ? (
        <p>Loading videos...</p>
      ) : (
        videos.map((video) => (
          <div key={video.id} style={{ marginBottom: "2rem" }}>
            <h2>{video.title}</h2>
            <p>{video.description}</p>
            <video
              src={video.url}
              style={{ width: "50%", borderRadius: "8px" }}
              autoPlay={video.autoplay}
              muted={video.muted}
              controls={video.controls}
              loop={video.loop}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
