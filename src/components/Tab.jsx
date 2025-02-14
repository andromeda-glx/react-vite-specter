/* eslint-disable react/prop-types */
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Tab({ title, icon, isActive, link, hasArrow, handleClick }) {
    return (
        <li onClick={() => handleClick(title.toLowerCase())}>
            <Link to={link}>
                <div
                    className={`
                        flex 
                        gap-x-2 
                        flex-auto 
                        ${isActive ? ("bg-gray-300 text-blue-600") : ("bg-gray-400 text-black")}
                        justify-center 
                        items-center 
                        h-10
                        `}
                >
                    <span><FontAwesomeIcon icon={icon} /></span>
                    <h3>{title}</h3>
                    {hasArrow && <FontAwesomeIcon icon={faChevronDown} />}
                </div>
            </Link>
        </li>
    )
}
