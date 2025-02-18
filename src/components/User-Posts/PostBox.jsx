import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function PostBox({ id, title, lightMode }) {  
    return (
        <Link to={`${id}`}>
            <li className={`${lightMode ? "bg-gray-100" : "bg-gray-800"} px-5 py-3 cursor-pointer rounded-lg transition-colors hover:scale-102 active:scale-104`}>
                <h2 className={`text-xl font-bold ${lightMode ? "text-black" : "text-white"} transition-colors`}>{title}</h2>
            </li>
        </Link>
    )
}
