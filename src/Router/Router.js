import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from "../Pages/Home/Home";
import { Cart } from "../Pages/Cart/Cart";


const Router = (props) => {
    

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />

                <Route path="/cart" element={<Cart/>}/>
                
            </Routes>
        </BrowserRouter>
    )

    
}
export default Router;