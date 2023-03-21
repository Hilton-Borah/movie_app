
import { Box, Button, Input } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'

const initialState = {
    email:"",
    password:""
}

const AdminLogin = () => {
    const [alldata,setAlldata] = useState(initialState);

    const {email,password} = alldata;


    const handleChange =(e)=>{
        const {name,value} = e.target;
        setAlldata({...alldata,[name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://movies-api-v1.onrender.com:443/api/v1/login",alldata)
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <Box>
      <form action="" onSubmit={handleSubmit}>
        <Input placeholder='Enter email' name='email' value={email} onChange={handleChange}/>
        <Input placeholder='Enter password' name='password' value={password} onChange={handleChange}/>
        <Button type='submit'>Login</Button>
      </form>
    </Box>
  )
}

export default AdminLogin
