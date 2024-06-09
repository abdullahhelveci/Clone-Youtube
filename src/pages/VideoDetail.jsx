import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../utils/helper";
import ReactPlayer from "react-player";
import VideoInfoo from "../components/VideoInfoo";
import VideoCard from "../components/VideoCard";


const VideoDetail = () => {
  const [searchParams] = useSearchParams(); 
  const [related, setRelated] = useState(null);
  const id = searchParams.get("v");
 
  useEffect(() => {
    getData(`/related?id=${id}`).then((res) => setRelated(res.data.data));
  }, []);
  return (
    <div className="w-full  h-screen overflow-auto lg:overflow-hidden flex flex-col lg:flex-row lg:px-[100px] gap-5 p-4 min-h-[95vh]">
      <div className="w-full">
        <ReactPlayer
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
          width={"100%"}
          height={"40%"}
        />
        <VideoInfoo id={id}/>
      </div>
      <div className="w-full flex flex-col gap-10 lg:max-w-[400px] sm:m-auto lg:h-screen lg:overflow-auto">
       {!related ? '...' : related.map((item) => {
        if(item.type !== 'video') return;
        return(
          <VideoCard key={item.videoId} video={item} />
        )
       })}
      </div>
    </div>
  );
};

export default VideoDetail;