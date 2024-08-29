import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ search }) => {
  const inputRef = useRef(null);
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" ref={inputRef} />
      <button
        className="search-button"
        onClick={() => search(inputRef.current.value)}
      >
        <FaSearch className="icon" />
      </button>
    </div>
  );
};

export default Searchbar;
