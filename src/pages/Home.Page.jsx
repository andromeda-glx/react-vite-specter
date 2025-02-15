/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Home({lightMode}) {
  
    return (
        <>
            <div>This is the Home page</div>
            <Link to="/user-profile/profile">
                <button className={`${lightMode ? "bg-blue-600" : "bg-blue-900"} text-white w-80 p-3 cursor-pointer rounded-md transition-colors`}>
                    Go to your profile
                </button>
            </Link>
        </>
    )
}
