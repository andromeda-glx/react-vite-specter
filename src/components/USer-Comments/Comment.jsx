/* eslint-disable react/prop-types */
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { LightModeContext } from "../../contexts/LightModeContext";

export default function Comment({ text, likes }) {
    const {lightMode} = useContext(LightModeContext);

    return (
        <li className={`${lightMode ? "bg-gray-300 text-black" : "bg-gray-900 text-white"} rounded-lg p-5 transition-colors cursor-pointer hover:scale-103`}>
            <p className="mb-2 py-5 border-b">{text}</p>
            <div className="flex items-center gap-2 text-blue-600">
                <span>{likes}</span>
                <FontAwesomeIcon icon={faThumbsUp} />
            </div>
        </li>
    )
}
