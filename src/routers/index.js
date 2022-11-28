import React from "react";
import { Route, Routes } from "react-router-dom";

import PublicRoute from "./PublicRoute";

// Pages
import Home from "../pages/home";

const AppRoutes = () => {
    
    return (
        <Routes>
            
            {/* PUBLIC ROUTES */}           
            <Route path="/" index element={<PublicRoute main={Home}  /> } />
        </Routes>
    );
};

export default AppRoutes;