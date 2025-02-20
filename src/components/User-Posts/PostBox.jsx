import { useContext } from "react";
import { Link } from "react-router-dom";
import { LightModeContext } from "../../contexts/LightModeContext";

/* eslint-disable react/prop-types */
export default function PostBox({ id, title }) {  
    const {lightMode} = useContext(LightModeContext);

    return (
        <Link to={`/user-profile/posts/${id}`}>
            <li className={`${lightMode ? "bg-gray-100" : "bg-gray-800"} px-5 py-3 cursor-pointer rounded-lg transition-colors hover:scale-102 active:scale-104`}>
                <h2 className={`text-xl font-bold ${lightMode ? "text-black" : "text-white"} transition-colors`}>{title}</h2>
            </li>
        </Link>
    )
}
