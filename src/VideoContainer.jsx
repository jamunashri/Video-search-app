import React from "react";

const VideoContainer = ({ videoURL, thumb }) => {
  return (
    <>
      <video
        src={videoURL}
        poster={thumb}
        controls
        className="videoContainer"
      />
    </>
  );
};
export default VideoContainer;
