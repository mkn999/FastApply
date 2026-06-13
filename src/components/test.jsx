import React, { useState } from 'react';
import { useEffect } from 'react';

export default function Test() {
    const [jobs,setJobs] = useState([])
  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const response = await fetch('http://10.48.46.124:5000/jobs');

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log('Fetch Error', error);
    }
  };

  return null;
}
