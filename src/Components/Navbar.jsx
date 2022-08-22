 import React from 'react';
 import { Link } from 'react-router-dom';
 const Navbar = () => {

    return (
        <>
        <Link to = "/">Home</Link>
        <Link to = "/dashboard">Dashboard</Link>
        <Link to = "/login">Login</Link>
        </>
    );
 }
 
 export default Navbar;
 