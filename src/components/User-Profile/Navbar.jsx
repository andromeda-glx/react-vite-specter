/* eslint-disable react/prop-types */
import { faFeatherPointed, faGear, faMessage, faUserGroup, faUserPen } from "@fortawesome/free-solid-svg-icons";
import Tab from "../Tab";

export default function Navbar({ activeTab = "profile" }) {
    return (
        <>
            <nav className="max-w-[1500px] mx-auto hidden sm:block">
                <ul className="grid sm:grid-cols-5 w-full items-center font-semibold">
                    <Tab
                        title={"Profile"}
                        icon={faUserPen}
                        isActive={activeTab === "profile"}
                        link={"/user-profile"}
                    />
                    <Tab
                        title={"Settings"}
                        icon={faGear}
                        isActive={activeTab === "settings"}
                        link={"/user-settings"}
                    />
                    <Tab
                        title={"Posts"}
                        icon={faFeatherPointed}
                        isActive={activeTab === "posts"}
                        link={"/user-posts"}
                    />
                    <Tab
                        title={"Comments"}
                        icon={faMessage}
                        isActive={activeTab === "comments"}
                        link={"/user-comments"}
                    />
                    <Tab
                        title={"Friends"}
                        icon={faUserGroup}
                        isActive={activeTab === "friends"}
                        link={"/user-friends"}
                    />
                </ul>
            </nav>
            <nav className="sm:hidden">
                <ul>
                    <Tab
                        title={"Profile"}
                        icon={faUserPen}
                        isActive={activeTab === "profile"}
                        link={"/user-profile"}
                        hasArrow={true}
                    />
                </ul>
            </nav>
        </>
    )
}
