import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashBoard from "../dashboard/dashboard";
import Signin from "../signinfolder/signinpage";
import Signup from "../signupfolder/signuppage";

function RouterOne() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Signin/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/dashboard' element={<DashBoard/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default RouterOne