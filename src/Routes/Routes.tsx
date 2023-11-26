import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Explore from "../Pages/Explore/Explore";
import Course from "../Pages/Course/Course";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/login" element={<Login />} />

                <Route path="/explore" element={<Explore />} />
                <Route path="/course/:id" element={<Course />} />
            </Routes>
        </BrowserRouter>
    )
}