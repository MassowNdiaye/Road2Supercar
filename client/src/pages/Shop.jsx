import React, { useEffect, useState } from "react";
import { getVehicles } from "../services/vehicleService";
import VehicleCard from "../components/VehicleCard";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import "./Shop.css";

const Shop = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]); //Filtered results
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching vehicles
  useEffect(() => {
    getVehicles()
      .then((data) => {
        console.log("Fetched vehicles:", data);
        setVehicles(data);
        setFilteredVehicles(data); // Initialize filtered list
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching vehicles:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter handler
  const handleFilterChange = (filters) => {
    let updated = [...vehicles];

    // Brand
    if (filters.brand) {
      updated = updated.filter((v) => v.brand === filters.brand);
    }

    // Year
    if (filters.minYear) {
      updated = updated.filter((v) => v.year >= Number(filters.minYear));
    }
    if (filters.maxYear) {
      updated = updated.filter((v) => v.year <= Number(filters.maxYear));
    }

    // Price
    if (filters.minPrice) {
      updated = updated.filter((v) => v.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      updated = updated.filter((v) => v.price <= Number(filters.maxPrice));
    }

    // Sorting
    switch (filters.sortBy) {
      case "price-asc":
        updated.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        updated.sort((a, b) => b.price - a.price);
        break;
      case "year-asc":
        updated.sort((a, b) => a.year - b.year);
        break;
      case "year-desc":
        updated.sort((a, b) => b.year - a.year);
        break;
      default:
        break;
    }
    setFilteredVehicles(updated);
  };

  if (loading) return <p>Loading vehicles...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="shop-container">
      <Navbar />
      <div className="inventory-layout">
        <Filter onFilterChange={handleFilterChange} />

        <div className="vehicle-section">
          <div className="vehicle-list">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
