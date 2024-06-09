import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../utils/helper";
import SideBar from "./SideBar";
import VideoCard from "../components/VideoCard";

const SearchResults = () => {
  const [params, setParams] = useSearchParams();
  const [results, setResults] = useState(null);

  const query = params.get("search_query");
  console.log(query);
  useEffect(() => {
    getData(`/search?query=${query}&type=video`).then((res) =>
      setResults(res.data.data)
    );
  }, [query]);
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col gap-5 p-5 w-full overflow-auto h-screen">
        {!results
          ? "loading.."
          : results.map((item, i) => {
              if (item.type !== "video") return;
              return (
                <VideoCard
                  key={i}
                  video={item}
                  design={"max-w-[500px] flex gap-5"}
                />
              );
            })}
      </div>
    </div>
  );
};

export default SearchResults;
