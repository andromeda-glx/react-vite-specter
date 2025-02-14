import { faCircleCheck, faCircleInfo, faEnvelope, faLock, faSackDollar, faShieldHalved, faSquarePlus, faUniversalAccess, faUserCheck, faUserGear } from "@fortawesome/free-solid-svg-icons";
import Option from "./Option";

export default function Settings() {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut fermentum lorem. Sed accumsan odio augue, ac ultrices tortor semper mollis.";

    return (
        <ul className="h-full">
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
    )
}
