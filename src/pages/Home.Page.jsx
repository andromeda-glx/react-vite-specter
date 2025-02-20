import { useContext } from "react";
import { Link } from "react-router-dom";
import { LightModeContext } from "../contexts/LightModeContext";

export default function Home() {
    const { lightMode } = useContext(LightModeContext)
    return (
        <>
            <div>This is the Home page</div>
            <Link to="/user-profile">
                <button className={`${lightMode ? "bg-blue-600" : "bg-blue-900"} text-white w-80 p-3 cursor-pointer rounded-md transition-colors`}>
                    Go to your profile
                </button>
            </Link>
        </>
    )
}
