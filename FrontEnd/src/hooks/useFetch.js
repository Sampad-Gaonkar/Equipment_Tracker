import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

function useFetch(url) {
    let [apiData,setapiData] = useState([]);

    let getApiData = async()=>{
        try {
            let data = await axios.get(url)
            setapiData(data)
        } 
        catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getApiData()
    },[])

    return {apiData}
}

export {useFetch}