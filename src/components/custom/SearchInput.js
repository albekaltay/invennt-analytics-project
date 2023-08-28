import React from "react";

const SearchInput = ({
  className,
  bgColor,
  handleGetSearchedMovies = () => {},
  ...props
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleGetSearchedMovies();
    }
  };
  return (
    <div className={`relative ${className}`}>
      <input
        data-testid="searchInput"
        className={`relative flex items-center  placeholder-gray-500 placeholder-opacity-50 placeholder:text-sm placeholder:font-light rounded-sm w-full py-2 px-3 text-gray-700 ${bgColor} leading-tight focus:outline-none focus:shadow-outline`}
        id="search-input"
        type="text"
        placeholder="Search"
        onKeyDown={handleKeyDown}
        {...props}
      />
      <button
        role="button"
        type="submit"
        onClick={handleGetSearchedMovies}
        className="absolute top-0 translate-y-1.5 end-3 cursor-pointer"
      >
        <i className="fa-regular fa-search text-sm text-gray-400" />
      </button>
    </div>
  );
};

export default SearchInput;
