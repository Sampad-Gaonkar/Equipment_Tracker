import React from 'react'
import './form.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams} from 'react-router-dom'
import './form.css'

const Update = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [status, setStatus] = useState('')
    const [date, setDate] = useState('')
    const navigate = useNavigate();

    const { id } = useParams();

    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.put(`http://localhost:8081/api/equipment/`+id,
             {name, type, status,date})
        .then(res => {
            navigate('/')
        }).catch(err => console.log(err));
    }

  return (
    <section className="details">
        <div className="form">
        <form action="" onSubmit={handleSubmit}>
            <h1>Update Equipments</h1>
            <label>Equipment Name</label>
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

            <button className='submit'>Update</button>
         </form>
    </div>
    </section>
  )
}

export default Update
