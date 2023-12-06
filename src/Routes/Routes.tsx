import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Explore from "../Pages/Explore/Explore";
import PreviewCourse from "../Pages/PreviewCourse/PreviewCourse";
import Learn from "../Pages/Learn/Learn.tsx";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/login" element={<Login />} />

                <Route path="/explore" element={<Explore />} />
                <Route path="/learn/:id/:chapter" element={<Learn />} />
                <Route path="/course/:id/preview" element={<PreviewCourse />} />
            </Routes>
        </BrowserRouter>
    )
}