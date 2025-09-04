import { useContext } from "react";
import { shopContext } from "../context/contextProvider";
import { assets } from "../assets/assets";

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useContext(shopContext);
  return (
    <div className={`max-w-[480px] w-full ml-auto border-[1px] rounded-[4px]`}>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setSearchQuery(searchQuery);
        }}
        className="flex items-center gap-2 px-2">
        <img src={assets.search_icon} className="w-4 h-4" alt="Search" />
        <input
          className="outline-0 p-2 w-full"
          type="text"
          placeholder="Search Here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
