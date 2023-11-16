import { useState, useEffect } from 'react';
import Sygma from 'sygma-sdk';

const useSygma = () => {
  const [data, setData] = useState(null);
  // Other states or effects

  useEffect(() => {
    const fetchData = async () => {
      const sygma = new Sygma(); // Initialize your Sygma instance
      // Fetch or manipulate data using Sygma-SDK
      const result = await sygma.getData(); // Replace with actual Sygma-SDK method
      setData(result);
    };

    fetchData();
  }, []);

  return data;
};

export default useSygma;
