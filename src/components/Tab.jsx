import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
export default function Tab({ title, icon, isActive }) {
    return (
        <div className={`
        flex 
        gap-x-2 
        flex-auto 
        ${isActive ? ("bg-gray-300 text-blue-600") : ("bg-gray-400 text-black")}
        justify-center 
        items-center 
        h-10
        `}>
            <span><FontAwesomeIcon icon={icon} /></span>
            <h3>{title}</h3>
        </div>
    )
}
