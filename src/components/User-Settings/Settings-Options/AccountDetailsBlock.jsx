import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */
export default function AccountDetailsBlock({ title }) {
    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut fermentum lorem.";

    return (
        <li className="w-full flex items-center gap-x-5 border-b pb-5 cursor-pointer">
            <div className="flex flex-col gap-y-2">
                <h3 className="font-bold">{title}</h3>
                <p>{desc}</p>
            </div>
            <FontAwesomeIcon icon={faChevronRight} />
        </li>
    )
}
