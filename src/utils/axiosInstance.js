import axios from "axios";


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // optional if you're hitting the same base
     withCredentials: true   
  });
  
  export default api