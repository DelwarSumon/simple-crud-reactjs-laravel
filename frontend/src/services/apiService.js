import axios from '../utils/axiosInstance';
const apiService = {
    get: async (url) => {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  
    post: async (url, data) => {
      try {
        const response = await axios.post(url, data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  
    put: async (url, data) => {
      try {
        const response = await axios.put(url, data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  
    delete: async (url) => {
      try {
        const response = await axios.delete(url);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  };
  
  export default apiService;