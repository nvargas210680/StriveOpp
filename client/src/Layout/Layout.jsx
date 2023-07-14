import React from "react";
import { Outlet } from "react-router-dom";
import Copyright from "./Copyright/Copyright";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Layout.css";
import NavigationBar from "./NavigationBar/NavigationBar";

const Layout = () => {
    return(
        <div className="layout">
            <NavigationBar />
            <Outlet />
            <Footer />
            <Copyright />
        </div>
    )
}

export default Layout;