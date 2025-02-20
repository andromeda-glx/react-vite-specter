/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LightModeContext } from "../../contexts/LightModeContext";

export default function Option({ icon, title, link }) {
    const {lightMode} = useContext(LightModeContext);

    return (
        <Link to={link}>
            <li className={`flex border-b border-b-gray-400 ${lightMode ? "hover:bg-gray-300 text-black" : "hover:bg-gray-700 text-white"} items-center gap-x-5 cursor-pointer p-5 transition-colors`}>
                <div className="text-2xl">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div className="overflow-hidden">
                    <h2 className="text-xl font-semibold">{title}</h2>
                </div>
            </li>
        </Link>
    )
}
