import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { LightModeContext } from "../contexts/LightModeContext";

export default function UserMainLayer() {  
    const {lightMode} = useContext(LightModeContext);

    return (
        <div className="mt-5 max-w-[1500px] mx-auto w-full">
            <Navbar />
            <div className={`${lightMode ? "bg-gray-200" : "bg-gray-800"} flex flex-col justify-start gap-x-10 h-[80vh] transition-colors`}>
                <Outlet />
            </div>
        </div>
    )
}
