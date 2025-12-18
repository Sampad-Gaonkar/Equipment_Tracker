import React from 'react'
import { useFetch } from '../hooks/useFetch';

function Equipment() {
    const {apiData} = useFetch("http://localhost:8081/api/equipment")

  console.log(apiData);
  return (
    <div>
      
    </div>
  )
}

export default Equipment
