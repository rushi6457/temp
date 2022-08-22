import React from 'react';
import { Container,Input,Button, Stack, Box } from '@chakra-ui/react';
import axios from "axios";
import {useState} from "react"
import { useNavigate } from 'react-router-dom';
function Login () {
    const [login,setLogin] = useState(false)
    const navigate= useNavigate()
    const handleSubmit = ()=>{

       
        navigate("/dashboard")
        // axios(`https://reqres.in/api/users/2`)
        // .then((res)=>res.json())
        // .then((res)=>{

        //     setLogin(res.data)
        //     console.log(res.data)
        //})
    }
    return (
    <Box>
        <Container>
            <Stack>
            <Input type = "email" placeholder='Enter Email' />
            <Input type = "password" placeholder='Enter Password' />
            <Button onClick = {handleSubmit}>Submit</Button>
            </Stack>
        </Container>
    </Box>
    );
}

export default Login;
