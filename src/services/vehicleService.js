// Getting Vehicles info from API -> for frontend 
export const getVehicles = async () => {
  const response = await fetch("http://localhost:3000/api/vehicles");

  if (!response.ok) {
    throw new Error("Failed to fetch vehicles");
  }

  return response.json();
};
