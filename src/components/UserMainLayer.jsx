/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function UserMainLayer({lightMode}) {  

    return (
        <div className="mt-5 max-w-[1500px] mx-auto w-full">
            <Navbar lightMode={lightMode} />
            <div className={`${lightMode ? "bg-gray-200" : "bg-gray-800"} flex flex-col justify-start gap-x-10 h-[80vh]`}>
                <Outlet />
            </div>
        </div>
    )
}
