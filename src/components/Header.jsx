/* eslint-disable react/prop-types */
import { faGhost, faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Header({lightMode, handleLightMode}) {
    return (
        <header className={`${lightMode ? "bg-blue-600" : "bg-blue-900"} px-5 py-3 shadow-md transition-colors`}>
            <div className="
            flex 
            items-center 
            font-semibold 
            text-white 
            justify-between 
            max-w-[1500px]
            mx-auto
            ">
                <Link to="/">
                    <div className="flex items-center gap-x-2 text-4xl">
                        <FontAwesomeIcon icon={faGhost} flip="horizontal" />
                        <h2>SPECTER</h2>
                    </div>
                </Link>
                <div className="flex items-center gap-x-4 text-xl">
                    <button className="cursor-pointer" onClick={() => handleLightMode()}>
                        {
                            lightMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />
                        }
                    </button>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </header>
    )
}
