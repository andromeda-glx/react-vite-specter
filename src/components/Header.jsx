import { faGhost, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    return (
        <header className="bg-blue-600 px-5 py-3 shadow-md">
            <div className="
            flex 
            items-center 
            font-semibold 
            text-white 
            justify-between 
            max-w-[1500px]
            mx-auto
            ">
                <div className="flex items-center gap-x-2 text-4xl">
                    <FontAwesomeIcon icon={faGhost} flip="horizontal" />
                    <h2>SPOOKY!</h2>
                </div>
                <div className="flex gap-x-4 text-xl">
                    <FontAwesomeIcon icon={faSun} />
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </header>
    )
}
