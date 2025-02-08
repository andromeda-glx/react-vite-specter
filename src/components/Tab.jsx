import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
export default function Tab({title, icon}) {
    return (
        <div className="flex gap-x-2 flex-auto bg-gray-200 justify-center items-center h-10">
            <span><FontAwesomeIcon icon={icon} /></span>
            <h3>{title}</h3>
        </div>
    )
}
