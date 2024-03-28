"use client";

import React, { useState } from "react";

type FilterOption = "Lowest to Highest" | "Highest to Lowest";

interface FilterCardProps {
  onChange: (option: FilterOption) => void;
}

const FilterCard: React.FC<FilterCardProps> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] =
    useState<FilterOption>("Lowest to Highest");
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleOptionChange = (option: FilterOption) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className="fixed left-0 top-20 bg-black p-4 rounded-3xl shadow-md z-10">
      <div className="relative">
        <h2
          className="text-lg text-white font-semibold mb-4 cursor-pointer"
          onClick={() => setShowOptions(!showOptions)}
        >
          Filter &#9662;
        </h2>
        {showOptions && (
          <div className="h-32 w-52 absolute top-full left-0 bg-black p-2 rounded-3xl shadow-md">
            <p className="text-xl text-white mb-2">Price</p>
            <label>
              <input
                type="radio"
                value="Lowest to Highest"
                checked={selectedOption === "Lowest to Highest"}
                onChange={() => handleOptionChange("Lowest to Highest")}
              />
              <span className="ml-2">Lowest to Highest</span>
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="Highest to Lowest"
                checked={selectedOption === "Highest to Lowest"}
                onChange={() => handleOptionChange("Highest to Lowest")}
              />
              <span className="ml-2">Highest to Lowest</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterCard;
