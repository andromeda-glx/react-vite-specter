/* eslint-disable react/prop-types */
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function Tab({ title, icon, isActive, link, hasArrow, handleClick, lightMode }) {
    const navigate = useNavigate();

    return (
        <li className="cursor-pointer" onClick={() => {
            navigate(link);
            handleClick(title.toLowerCase());
        }}>
            <div
                className={`
                        flex 
                        gap-x-2 
                        flex-auto 
                        ${isActive
                        ? (lightMode ? "bg-blue-200 text-blue-950" : "bg-blue-400 text-blue-950")
                        : (lightMode ? "bg-blue-500 text-white" : "bg-blue-900 text-white")}
                        justify-center 
                        items-center 
                        h-10
                        transition-colors
                        `}
            >
                <span><FontAwesomeIcon icon={icon} /></span>
                <h3>{title}</h3>
                {hasArrow && <FontAwesomeIcon icon={faChevronDown} />}
            </div>
        </li>
    )
}
