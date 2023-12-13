import axios from "axios";

export const apiClient =  axios.create({
  baseURL: import.meta.env.VITE_RAWG_BASE_URL,
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  }
  
});
