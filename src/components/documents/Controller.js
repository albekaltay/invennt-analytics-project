import YearPicker from "../custom/YearPicker";
import Button from "@/components/base/Button";
import CategoryRadioGroup from "@/components/custom/CategoryRadioGroup";
const Controller = ({
  searchedMovie,
  movieYear,
  movieType,
  setMovieType,
  categories,
  handleYearChange,
  handleGridView,
  handleListView,
  isGridWiew
}) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between mb-2 items-center py-3">
        <div className="flex items-center mb-2 lg:mb-0">
          <CategoryRadioGroup
            movieType={movieType}
            setMovieType={setMovieType}
            searchedMovie={searchedMovie}
            movieYear={movieYear}
            categories={categories}
          />
        </div>

        <ul className="flex flex-col md:flex-row items-center">
          <div className="flex flex-row">
            <li className="mr-4">
              <YearPicker
                selectedYear={movieYear}
                onYearChange={handleYearChange}
              />
            </li>
            <li className="flex items-center mr-4">
              <Button
                icon={<i className="fa-solid fa-grid-2 text-white"></i>}
                buttonColor={isGridWiew ? "slate" : "black"}
                onClick={handleGridView}
              />
            </li>
            <li className="flex items-center">
              <Button
                icon={<i className="fa-solid fa-list text-white"></i>}
                buttonColor={!isGridWiew ? "slate" : "black"}
                onClick={handleListView}
              />
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Controller;
