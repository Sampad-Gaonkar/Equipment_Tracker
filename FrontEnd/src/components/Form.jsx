import React from 'react'
import './form.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [status, setStatus] = useState('')
    const [date, setDate] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post("http://localhost:8081/api/equipment",
             {name, type, status,date})
        .then(res => {
            navigate('/')
        }).catch(err => console.log(err));
        console.log(name,type,status,date);
    }

  return (
    <section className="details">
        <div className="form">
        <form action="" onSubmit={handleSubmit}>
            <h1>Add Equipments</h1>
            <label htmlFor="">Equipment Name</label>
            <input type="text" placeholder='Enter Equipment Name' className='equipName' onChange={e=>setName(e.target.value)}/>
            <div className="type">
                <label htmlFor="">Type</label>
                <select name="type" id="type" onChange={e=>{setType(e.target.value)}}>
                    <option value="">Select Your Type</option>
                    <option value="Machine">Machine</option>
                    <option value="Vessel">Vessel</option>
                    <option value="Tank">Tank</option>
                    <option value="Mixer">Mixer</option>
                </select>
            
            </div>
            <div className="status">
                <label htmlFor="">Status</label>
                <select name="status" id="status" onChange={e=>setStatus(e.target.value)}>
                    <option value="">Select Your Status</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Active">Active</option>
                    <option value="Under Maintenance">Under Maintenance</option>
                </select>
            </div>
            <label htmlFor="">Cleaned Date</label>
            <input type="date" placeholder='Enter the date'  className='clrdate' onChange={e=>setDate(e.target.value)}/>

            <button className='submit' >Submit</button>
         </form>
    </div>
    </section>
  )
}

export default Form
