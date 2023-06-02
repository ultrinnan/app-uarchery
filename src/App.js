import React from 'react';
import './sass/main.scss';
import Header from "./components/Header/Header";

import { BrowserRouter as Router } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";

function App() {
    return (
        <Router>
            <Header />
            <Content />
            <Footer />
        </Router>
    )
}

export default App;

