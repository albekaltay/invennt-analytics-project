import React from "react";
import SearchInput from "../custom/SearchInput";
import Link from "next/link";
import Controller from "../documents/Controller";

const AppContainer = ({
  children,
  rightToolbar,
  leftToolbar,
  hiddenSmallScreen = true,
  showController = false,
  currentPage,
  searchedMovie,
  handleSearchChange,
  handleGetSearchedMovies,
  movieYear,
  setMovieYear,
  movieType,
  setMovieType,
  categories,
  handleYearChange,
  handleGridView,
  handleListView,
  isGridWiew,
}) => {
  return (
    <>
      <nav className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-2">
          <div className="flex justify-between h-16 items-center">
            <div className="w-1/2 flex flex-row items-center justify-between">
              <Link href="/">
                <span className=" text-white font-bold">INVENT ANALYTICS</span>
              </Link>
              <div className="w-8/12 hidden md:block px-7  ">
                <SearchInput
                  value={searchedMovie}
                  onChange={handleSearchChange}
                  handleGetSearchedMovies={handleGetSearchedMovies}
                />
              </div>
            </div>
            <ul className="w-1/2 flex justify-end pr-10">
              <li className="md:hidden mr-4">
                <i className="fa-regular fa-search mr-1 text-white" />{" "}
              </li>
              <li className="flex flex-row items-center">
                <i className="fa-regular fa-user mr-2 text-white" />
                <span className="text-white text-sm font-thin hidden sm:block">
                  ALBEK ALTAY
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mx-auto max-w-7xl  px-2 xl:px-0 flex flex-col sm:flex-row py-4 min-h-[700px]">
        {rightToolbar && (
          <div className="min-w-[220px] hidden lg:block">{rightToolbar}</div>
        )}

        <div className="w-full sm:px-6 mb-4 sm:mb-0">
          {showController && (
            <Controller
              searchedMovie={searchedMovie}
              movieYear={movieYear}
              setMovieYear={setMovieYear}
              movieType={movieType}
              setMovieType={setMovieType}
              categories={categories}
              currentPage={currentPage}
              handleYearChange={handleYearChange}
              handleGridView={handleGridView}
              handleListView={handleListView}
              isGridWiew={isGridWiew}
            />
          )}
          {children}
        </div>
        {leftToolbar && (
          <div
            className={`min-w-[213px] px-6 sm:px-0 ${
              hiddenSmallScreen && "hidden"
            } md:block`}
          >
            {leftToolbar}
          </div>
        )}
      </div>
    </>
  );
};

export default AppContainer;
