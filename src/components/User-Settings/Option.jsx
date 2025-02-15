/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Option({ icon, title, link }) {
    return (
        <Link to={link}>
            <li className="flex border-b border-b-gray-400 hover:bg-gray-300 items-center gap-x-5 cursor-pointer p-5">
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
