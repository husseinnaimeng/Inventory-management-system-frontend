import { Outlet } from "react-router-dom"
import Navbar from "../partial/navbar/Navbar"
const PageContent = () => {

    return (
        <div className="page-content">
            <Navbar />
            <div className="   max-w-7xl m-auto lg:p-10 p-5 bg-white">
                <Outlet />
            </div>
        </div>
    )
}

export default PageContent