import { createContext, useEffect, useState } from "react";
import { categories } from "../utils/constants";
import { getData } from "../utils/helper";

export const YoutubeContext = createContext();

export const YoutubeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [videos, setVideos] = useState();

  useEffect(() => {
    if (
      selectedCategory.type === "home" ||
      selectedCategory.type === "trending"
    ) {

      setVideos(null)

      getData(`/${selectedCategory.type}`).then((res) => {
        console.log(res)
        const filtered = res.data.data.filter((i) => i.type === "video");
        setVideos(filtered);
      });
    }
    if (selectedCategory.type === "category") {
      setVideos(null)
      getData(`/search?query=${selectedCategory.name}&type=video`).then((res) => {
        const filtered = res.data.data.filter((i) => i.type === 'video')
        setVideos(filtered)
      })
    }
  }, [selectedCategory]);

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};

