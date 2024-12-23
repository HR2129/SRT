import React, {StrictMode} from "react";
import { createRoot } from 'react-dom/client'
import App from "./app.jsx";
import {BrowserRouter, Routes , Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home.jsx'
import Moreinfo from "./Components/Pages/Home/Moreinfo.jsx";
import Services from "./Components/Pages/Services/Services.jsx";
import NotFound from './Components/Pages/NotFound.jsx'
import Users from "./Components/Pages/Users/Users.jsx";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
            <Routes>
                <Route path='/' element={<Home/>} >
                    <Route path="/home/Moreinfo" element={<Moreinfo/>}/>
                </Route>
                <Route path='/services' element={<Services/>} />
                <Route path="/users" element={<Users/>}/> 
                <Route path='*' element={<NotFound/>} />
            </Routes>        
        </BrowserRouter>
    </StrictMode>
)