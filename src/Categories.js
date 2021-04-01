import React from "react";

const Categories = ({ filterItems, categories }) => {
  console.log(categories);
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            onClick={(e) => filterItems(category)}
            key={index}
            className="filter-btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
