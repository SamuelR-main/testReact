import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppHome from "../pages/Home/index-home";
import AppLogin from "../pages/Login/index-Login";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppHome />}></Route>
                <Route path="/login" element={<AppLogin />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;