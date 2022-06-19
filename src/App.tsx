import React from "react";
import { Router } from "router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Router />
            <Footer />
        </>
    );
}

export default App;
