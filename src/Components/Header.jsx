import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Comics from "../pages/Comics";
import Series from "../pages/Series";

export default function Header(){
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className="link">Home</Link>
                        </li>
                        <li>
                            <Link to="/comics" className="link">Comics</Link>
                        </li>
                        <li>
                            <Link to="/series" className="link">Series</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Asignacion de rutas con los componentes*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/comics' element={<Comics />} />
                <Route path='/series' element={<Series />} />
            </Routes>
        </BrowserRouter>
    )
}