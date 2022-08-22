import {Routes,Route} from "react-router-dom"
import Login from "./Login";
import Dashboard from "./Dashboard";

function AllRoutes (){

    return (

        <Routes>

            <Route path = "/" element = {<h1>Home</h1>}/>
             <Route path = "/dashboard" element = {<Dashboard/>}/>
             <Route path = "/login" element = {<Login/>}/>
        </Routes>
    )
}

export default AllRoutes;