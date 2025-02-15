/* eslint-disable react/prop-types */
import { faCircleCheck, faCircleInfo, faEnvelope, faLock, faSackDollar, faShieldHalved, faSquarePlus, faUniversalAccess, faUserCheck, faUserGear } from "@fortawesome/free-solid-svg-icons";
import Option from "./Option";
import { Outlet } from "react-router-dom";

export default function Settings({lightMode}) {
    const path = "/user-profile/settings/";

    return (
        <>
            <div className="grid grid-cols-12 h-[100%]">
                <nav className="col-start-1 col-end-5 h-[100%] max-h-[100%] overflow-y-scroll">
                    <ul className="h-[100%]">
                        <Option title={"Your account"} icon={faUserGear} link={path + "your-account"} lightMode={lightMode} />
                        <Option title={"Monetization"} icon={faSackDollar} link={path + "monetization"} lightMode={lightMode} />
                        <Option title={"Premium"} icon={faCircleCheck} link={path + "premium"} lightMode={lightMode} />
                        <Option title={"Subscriptions"} icon={faUserCheck} lightMode={lightMode} />
                        <Option title={"Security"} icon={faLock} lightMode={lightMode} />
                        <Option title={"Privacy"} icon={faShieldHalved} lightMode={lightMode} />
                        <Option title={"Notifications"} icon={faEnvelope} lightMode={lightMode} />
                        <Option title={"Accessibility"} icon={faUniversalAccess} lightMode={lightMode} />
                        <Option title={"Additional Resources"} icon={faSquarePlus} lightMode={lightMode} />
                        <Option title={"Help Center"} icon={faCircleInfo} lightMode={lightMode} />
                    </ul>
                </nav>
                <div className="col-start-5 -col-end-1 p-5 max-h-[100%] overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </>
    )
}
