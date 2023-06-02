import React from 'react';
import './Content.scss';
import {Route, Routes} from "react-router-dom";
import About from "../../pages/About";
import Converter from "../Converter/Converter";

function Content() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/converter" element={<Converter />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </main>
    );
}

export default Content;
