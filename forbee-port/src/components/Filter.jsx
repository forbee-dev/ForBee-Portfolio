import { useState } from "react";

export default function FilterOptions({ posts, onFilter, offFilter }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onFilter(option);
  };

  const handleFilterReset = () => {
    setSelectedOption("");
    offFilter();
  };

  // Get a list of all unique option keys
  const optionKeys = Array.from(
    new Set(posts.flatMap((post) => post.attributes?.nodes?.[0]?.options || []))
  );

  return (
    <div className="justify-center">
      <div className="inline-block">Filter:</div>
      {optionKeys.map((option) => (
        <button
          key={option}
          onClick={() => handleSelectOption(option)}
          className={
            selectedOption === option
              ? "inline-block btn btn-ghost btn-active"
              : "inline-block btn btn-ghost"
          }
        >
          {option}
        </button>
      ))}
      <button
        className="btn btn-ghost"
        onClick={handleFilterReset}
      >
        Reset Filter
      </button>
    </div>
  );
}
