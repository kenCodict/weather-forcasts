import axios from 'axios';
export const fetchData = async (url:string) => {
   
    try {
      const resp = await axios.get(url)
     const data = await resp.data
     return data
    } catch (error) {
     return error;
      
    }
   }
 