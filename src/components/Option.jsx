/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Option({icon, title, desc}) {
    return (
        <li className="flex border-b p-3 hover:bg-gray-300 items-center gap-x-5 cursor-pointer">
            <div className="text-2xl">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p>{desc}</p>
            </div>
        </li>
    )
}
