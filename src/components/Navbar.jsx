/* eslint-disable react/prop-types */
import { faFeatherPointed, faGear, faMessage, faUserGroup, faUserPen } from "@fortawesome/free-solid-svg-icons";
import Tab from "./Tab";
import { useState } from "react";

export default function Navbar() {
    const [activeTab, setActiveTab] = useState("profile");

    function changeTab(tabName){
        console.log(tabName);
        
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
                        link={"/user-profile/profile"}
                        handleClick={changeTab}
                    />
                    <Tab
                        title={"Settings"}
                        icon={faGear}
                        isActive={activeTab === "settings"}
                        link={"/user-profile/settings"}
                        handleClick={changeTab}
                    />
                    <Tab
                        title={"Posts"}
                        icon={faFeatherPointed}
                        isActive={activeTab === "posts"}
                        link={"/user-profile/posts"}
                        handleClick={changeTab}
                    />
                    <Tab
                        title={"Comments"}
                        icon={faMessage}
                        isActive={activeTab === "comments"}
                        link={"/user-profile/comments"}
                        handleClick={changeTab}
                    />
                    <Tab
                        title={"Friends"}
                        icon={faUserGroup}
                        isActive={activeTab === "friends"}
                        link={"/user-profile/friends"}
                        handleClick={changeTab}
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
