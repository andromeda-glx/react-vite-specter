import { faFeatherPointed, faGear, faMessage, faUserGroup, faUserPen } from "@fortawesome/free-solid-svg-icons";
import Tab from "./Tab";

export default function Navbar() {
    return (
        <nav className="bg-gray-200">
            <ul className="grid grid-cols-5 w-full items-center font-semibold">
                <li><Tab title={"Profile"} icon={faUserPen} /></li>
                <li><Tab title={"Settings"} icon={faGear} /></li>
                <li><Tab title={"Posts"} icon={faFeatherPointed} /></li>
                <li><Tab title={"Comments"} icon={faMessage} /></li>
                <li><Tab title={"Friends"} icon={faUserGroup} /></li>
            </ul>
        </nav>
    )
}
