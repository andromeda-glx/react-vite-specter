import { faCircleCheck, faCircleInfo, faEnvelope, faLock, faSackDollar, faShieldHalved, faSquarePlus, faUniversalAccess, faUserCheck, faUserGear } from "@fortawesome/free-solid-svg-icons";
import Option from "../Option";
import Navbar from "./Navbar";

export default function Settings() {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut fermentum lorem. Sed accumsan odio augue, ac ultrices tortor semper mollis.";

    return (
        <main className="p-5 max-w-[1500px] mx-auto">
            <Navbar activeTab="settings" />
            <div className="bg-gray-200 p-10 flex justify-center gap-x-10 h-[80vh] overflow-y-auto">
                <ul>
                    <Option title={"Your account"} icon={faUserGear} desc={lorem} />
                    <Option title={"Monetization"} icon={faSackDollar} desc={lorem} />
                    <Option title={"Premium"} icon={faCircleCheck} desc={lorem} />
                    <Option title={"Subscriptions"} icon={faUserCheck} desc={lorem} />
                    <Option title={"Security"} icon={faLock} desc={lorem} />
                    <Option title={"Privacy"} icon={faShieldHalved} desc={lorem} />
                    <Option title={"Notifications"} icon={faEnvelope} desc={lorem} />
                    <Option title={"Accessibility"} icon={faUniversalAccess} desc={lorem} />
                    <Option title={"Additional Resources"} icon={faSquarePlus} desc={lorem} />
                    <Option title={"Help Center"} icon={faCircleInfo} desc={lorem} />
                </ul>
            </div>
        </main>
    )
}
