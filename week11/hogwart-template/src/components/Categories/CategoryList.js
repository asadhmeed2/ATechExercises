import React from "react";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      {/* add link to each of these */}

      {categories.map((category) => (
        <Link to={`/wiki/${category.routeLink}/`}>
          <CategoryCard categoryData={category} />
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
