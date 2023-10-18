import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="container mx-auto px-10">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;