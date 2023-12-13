import axios from "axios";

export const apiClient =  axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '0a9386a9ff1f4697b1fe82b95c4ede4b',
  }
  
});
