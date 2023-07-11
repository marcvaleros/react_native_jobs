import { useState, useEffect } from "react";
import axios from "axios";



const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '66457ef4e1msha8ed4f09b43ffdap1a0b39jsn9c4f58924927',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
    // query: 'Python developer in Texas, USA',
    // page: '1',
    // num_pages: '1'
  };


const fetchData = async () => {
  setIsLoading(true);
  try {
    const response = await axios.request(options);
    setData(response.data.data);
    setIsLoading(false);
  } catch (error) {
    setError(error);
    alert('There is an error');
  } finally {
    setIsLoading(false)
  }
}

useEffect(()=>{
  fetchData();
}, []);

const refetch = () => {
  setIsLoading(true)
  fetchData();
}


  return { data,  isLoading, error, refetch}
}

export default useFetch; 