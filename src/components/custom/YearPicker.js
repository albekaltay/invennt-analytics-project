import React from "react";

const YearPicker = ({ selectedYear, onYearChange }) => {
  const currentYear = new Date().getFullYear();
  const years = [
    "All",
    ...Array.from({ length: 50 }, (_, index) => currentYear - index),
  ];

  return (
    <select
      className="p-2 border rounded"
      value={selectedYear}
      onChange={(e) => onYearChange(e.target.value)}
    >
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearPicker;
