import { faGhost, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-blue-600 px-5 py-3 shadow-md mb-5">
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
                    <button>
                        <FontAwesomeIcon icon={faSun} />
                    </button>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </header>
    )
}
