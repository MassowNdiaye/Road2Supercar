// Getting Vehicles info from API -> for frontend
export const getVehicles = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/vehicles`);

  if (!response.ok) {
    throw new Error("Failed to fetch vehicles");
  }

  return response.json();
};
