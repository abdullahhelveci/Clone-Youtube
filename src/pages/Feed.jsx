import React, { useContext } from "react";
import SideBar from "./SideBar";
import { YoutubeContext } from "../context/youtubeContext";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";
import "../index.css";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);
  return (
    <div className="flex gap-4 ">
      <SideBar />
      <div className="videos">
        {!videos ? (
          <Loading />
        ) : (
          videos.map((video) => <VideoCard key={video.videoId} video={video} />)
        )}
      </div>
    </div>
  );
};

export default Feed;