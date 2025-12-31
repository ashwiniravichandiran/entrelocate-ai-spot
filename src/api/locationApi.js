import axios from "axios";

const API_BASE = "https://entrelocate-ai-spot-1.onrender.com";


export const fetchBestLocations = (city, business) => {
  const response = await axios.post(`${API_BASE}/api/location`, {
    city: city,
    business: business,
  });

  return response.data; 
};
