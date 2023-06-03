import React from 'react';
import './Content.scss';
import {Route, Routes} from "react-router-dom";
import About from "../../pages/About";
import Converter from "../Converter/Converter";
import Encyclopedia from "../../pages/Encyclopedia";

function Content() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Converter />} />
                <Route path="/converter" element={<Converter />} />
                <Route path="/about" element={<About />} />
                <Route path="/encyclopedia" element={<Encyclopedia />} />
            </Routes>
        </main>
    );
}

export default Content;
