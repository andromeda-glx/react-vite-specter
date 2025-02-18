/* eslint-disable react/prop-types */
import { faFeatherPointed, faGear, faMessage, faUserGroup, faUserPen } from "@fortawesome/free-solid-svg-icons";
import Tab from "./Tab";
import { useState } from "react";

export default function Navbar({lightMode}) {
    const [activeTab, setActiveTab] = useState("profile");

    function changeTab(tabName){
        setActiveTab(tabName);
    }

    return (
        <>
            <nav className="max-w-[1500px] mx-auto hidden sm:block">
                <ul className="grid sm:grid-cols-5 w-full items-center font-semibold">
                    <Tab
                        title={"Profile"}
                        icon={faUserPen}
                        isActive={activeTab === "profile"}
                        link={"."}
                        handleClick={changeTab}
                        lightMode={lightMode}
                    />
                    <Tab
                        title={"Settings"}
                        icon={faGear}
                        isActive={activeTab === "settings"}
                        link={"settings"}
                        handleClick={changeTab}
                        lightMode={lightMode}
                    />
                    <Tab
                        title={"Posts"}
                        icon={faFeatherPointed}
                        isActive={activeTab === "posts"}
                        link={"posts"}
                        handleClick={changeTab}
                        lightMode={lightMode}
                    />
                    <Tab
                        title={"Comments"}
                        icon={faMessage}
                        isActive={activeTab === "comments"}
                        link={"comments"}
                        handleClick={changeTab}
                        lightMode={lightMode}
                    />
                    <Tab
                        title={"Friends"}
                        icon={faUserGroup}
                        isActive={activeTab === "friends"}
                        link={"friends"}
                        handleClick={changeTab}
                        lightMode={lightMode}
                    />
                </ul>
            </nav>
            <nav className="sm:hidden">
                <ul>
                    <Tab
                        title={"Profile"}
                        icon={faUserPen}
                        isActive={activeTab === "profile"}
                        link={"user-profile"}
                        hasArrow={true}
                    />
                </ul>
            </nav>
        </>
    )
}
