/* eslint-disable react/prop-types */
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Comment({ text, likes }) {
    return (
        <li className="bg-gray-300 rounded-lg p-5">
            <p className="mb-2 py-5 border-b">{text}</p>
            <div className="flex items-center gap-2 text-blue-600">
                <span>{likes}</span>
                <FontAwesomeIcon icon={faThumbsUp} />
            </div>
        </li>
    )
}
