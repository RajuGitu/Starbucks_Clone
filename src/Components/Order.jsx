import Navbar from "./Navbar";
import { Outlet } from "react-router-dom"; 

const Order = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default Order;
