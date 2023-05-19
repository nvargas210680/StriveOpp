import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import NavigationBar from "./Pages/navbar";

export default function Layout(){
    return(
        <main>
            <Header />
            <NavigationBar />
            <Outlet />
            <Footer />
        </main>
    )
}