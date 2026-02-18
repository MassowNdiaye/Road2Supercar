import React from "react";
import { useState } from "react";
import "./Filter.css";

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    brand: "",
    minYear: "",
    maxYear: "",
    minPrice: "",
    maxPrice: "",
    minMileage: "",
    maxMileage: "",
    sortBy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedFilters = {
      ...filters,
      [name]: value,
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleReset = () => {
    const reset = {
      brand: "",
      minYear: "",
      maxYear: "",
      minPrice: "",
      maxPrice: "",
      minMileage: "",
      maxMileage: "",
      sortBy: "",
    };

    setFilters(reset);
    onFilterChange(reset);
  };

  return (
    <div className="filter-container">
      <h2>Filter Vehicles</h2>

      {/* Brand */}
      <div className="filter-group">
        <label>Brand:</label>
        <select name="brand" value={filters.brand} onChange={handleChange}>
          <option value="">All</option>
          <option value="Aston Martin">Aston Martin</option>
          <option value="Bentley">Bentley</option>
          <option value="BMW">BMW</option>
          <option value="Ferrari">Ferrari</option>
          <option value="Lamborghini">Lamborghini</option>
          <option value="Mercedes Benz">Mercedes Benz</option>
          <option value="Porsche">Porsche</option>
        </select>
      </div>

      {/* Year */}
      <div className="filter-group">
        <label>Year:</label>
        <input
          type="number"
          name="minYear"
          placeholder="Min"
          value={filters.minYear}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxYear"
          placeholder="Max"
          value={filters.maxYear}
          onChange={handleChange}
        />
      </div>

      {/* Price */}
      <div className="filter-group">
        <label>Price:</label>
        <input
          type="number"
          name="minPrice"
          placeholder="Min"
          value={filters.minPrice}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max"
          value={filters.maxPrice}
          onChange={handleChange}
        />
      </div>

      {/* Sorting */}
      <div className="filter-group">
        <label>Sort By:</label>
        <select name="sortBy" value={filters.sortBy} onChange={handleChange}>
          <option value="">None</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="year-desc">Year: Newest</option>
          <option value="year-asc">Year: Oldest</option>
        </select>
      </div>

      <button onClick={handleReset} style={{ marginTop: "10px" }}>
        Reset Filters
      </button>
    </div>
  );
};

export default Filter;
