/* eslint-disable react/prop-types */
import { faFeatherPointed, faGear, faMessage, faUserGroup, faUserPen } from "@fortawesome/free-solid-svg-icons";
import Tab from "../Tab";
import { Link } from "react-router-dom";

export default function Navbar({ activeTab = "profile" }) {
    return (
        <nav className="max-w-[1500px] mx-auto">
            <ul className="grid grid-cols-5 w-full items-center font-semibold">
                <li>
                    <Link to="/user-profile">
                        <Tab
                            title={"Profile"}
                            icon={faUserPen}
                            isActive={activeTab === "profile"}
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/user-settings">
                        <Tab
                            title={"Settings"}
                            icon={faGear}
                            isActive={activeTab === "settings"}
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/user-posts">
                        <Tab
                            title={"Posts"}
                            icon={faFeatherPointed}
                            isActive={activeTab === "posts"}
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/user-comments">
                        <Tab
                            title={"Comments"}
                            icon={faMessage}
                            isActive={activeTab === "comments"}
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/user-friends">
                        <Tab
                            title={"Friends"}
                            icon={faUserGroup}
                            isActive={activeTab === "friends"}
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
