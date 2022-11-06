import React from "react";
import { VideoContainer } from "./AppLayout";
import { videos } from "./video";

const Container = ({ resultanData }) => {
  return (
    <>
      <div class="container">
        {!resultanData ? (
          <>
            {videos.map((item, key) => (
              <div class="item" key={key}>
                <h3>{item.title}</h3>
                <VideoContainer videoURL={item.sources} thumb={item.thumb} />
                <p>{item.subtitle}</p>
              </div>
            ))}
          </>
        ) : (
          <>
            <div class="item">
              <h3>{resultanData.title}</h3>
              <VideoContainer
                videoURL={resultanData.sources}
                thumb={resultanData.thumb}
              />
              <p>{resultanData.subtitle}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Container;
