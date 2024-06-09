import { useContext } from "react";
import { categories } from "../utils/constants";
import { YoutubeContext } from "../context/youtubeContext";

const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext);
  return (
    <nav className="flex flex-col p-1 md:p-4">
      {categories.map((item, i) => (
        <div key={i}>
          <div
            onClick={() => setSelectedCategory(item)}
            className={` ${
              item.name === selectedCategory.name && 'bg-white'
            }flex items-center gap-2 py-4 px-1 text-md md:lg curser-pointer raunder-md hover:bg-[#2d2d2d]`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
          {item.divider && <hr />}
        </div>
      ))}
    </nav>
  );
};

export default SideBar;
