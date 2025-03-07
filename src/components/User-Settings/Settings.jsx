import { faCircleCheck, faCircleInfo, faEnvelope, faLock, faSackDollar, faShieldHalved, faSquarePlus, faUniversalAccess, faUserCheck, faUserGear } from "@fortawesome/free-solid-svg-icons";
import Option from "./Option";
import { Outlet } from "react-router-dom";

export default function Settings() {
    const path = "/user-profile/settings/";

    return (
        <>
            <div className="grid grid-cols-12 h-[100%]">
                <nav className="col-start-1 col-end-5 h-[100%] max-h-[100%] overflow-y-scroll">
                    <ul className="h-[100%]">
                        <Option title={"Your account"} icon={faUserGear} link={path + "your-account"} />
                        <Option title={"Monetization"} icon={faSackDollar} link={path + "monetization"} />
                        <Option title={"Premium"} icon={faCircleCheck} link={path + "premium"} />
                        <Option title={"Subscriptions"} icon={faUserCheck} />
                        <Option title={"Security"} icon={faLock} />
                        <Option title={"Privacy"} icon={faShieldHalved} />
                        <Option title={"Notifications"} icon={faEnvelope} />
                        <Option title={"Accessibility"} icon={faUniversalAccess} />
                        <Option title={"Additional Resources"} icon={faSquarePlus} />
                        <Option title={"Help Center"} icon={faCircleInfo} />
                    </ul>
                </nav>
                <div className="col-start-5 -col-end-1 p-5 max-h-[100%] overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </>
    )
}
