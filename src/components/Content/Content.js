import React from 'react';
import './Content.scss';
import {Route, Routes} from "react-router-dom";
import About from "../../pages/About";
import Converter from "../Converter/Converter";
import Encyclopedia from "../../pages/Encyclopedia";
import Training from "../../pages/Trainings";
import PatrolList from "../competition/PatrolList/PatrolList";
import UserPage from "../competition/UserPage/UserPage";

function Content() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Converter />} />

                <Route path="/signin" element={<Converter />} />
                <Route path="/signup" element={<Converter />} />

                <Route path="/converter" element={<Converter />} />
                <Route path="/competition" element={<Converter />} />
                <Route path="/competition/patrols" element={<PatrolList />} />
                <Route path="/competition/user" element={<UserPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/encyclopedia" element={<Encyclopedia />} />
                <Route path="/trainings" element={<Training />} />
            </Routes>
        </main>
    );
}

export default Content;
