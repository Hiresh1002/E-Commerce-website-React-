import React from 'react';

const video = "https://player.cloudinary.com/embed/?cloud_name=disi15r7a&public_id=275498_small_pcj7pa&profile=cld-default";

function Home() {
  return (
    <div>
      <h1>hello</h1>
      
      <video 
        src={video} 
        controls 
        autoPlay 
        loop 
        muted 
        style={{ width: "600px", borderRadius: "12px", marginTop: "20px" }}
      />
    </div>
  );
}

export default Home;
