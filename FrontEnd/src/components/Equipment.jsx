import React, { useEffect, useState } from 'react'
import './equipment.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Equipment = () => {
    let [equip, setEquip] = useState([])
    let navigate = useNavigate();

    let getApiData = async()=>{
        try {
            let {data} = await axios.get("http://localhost:8081/api/equipment")
            console.log("Api");
            console.log(data);
            setEquip(data)
        } 
        catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getApiData()
    },[])


    let deleteEquip = (id)=>{
        axios.delete(`http://localhost:8081/api/equipment/`+id,)
        .then(res => {
            navigate('/')
        }).catch(err => console.log(err));
    }



  return (
    <section className='main'>
        <div className="data">
            <div className="heading">
            <h1>Equipment Tracker</h1>
            <Link to="/Create"  className='addbtn'><i class="fa-solid fa-plus"></i> Add Equipment</Link>
        </div>
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {equip.map(({eid,name,type,status,date})=>(
                    <tr key={eid}>
                        <td>{name}</td>
                        <td>{type}</td>
                        <td>{status}</td>
                        <td>{date}</td>
                        <td>
                            <div className='action'>
                                <Link to={`/update/${eid}`} onClick={()=>{edit}} id='edit'><i class="fa-regular fa-pen-to-square"></i> Update</Link>
                                <Link to='/delete' onClick={()=>{deleteEquip(eid)}} id='delete'><i class="fa-solid fa-trash-can"></i> Delete</Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </section>
  )
}

export default Equipment
