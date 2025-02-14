/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function UserMainLayer() {
    return (
        <div className="mt-5 max-w-[1500px] mx-auto w-full">
            <Navbar/>
            <div className="bg-gray-200 p-10 flex flex-col justify-start gap-x-10 items-center h-[80vh] overflow-y-auto">
                <Outlet />
            </div>
        </div>
    )
}
