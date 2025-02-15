/* eslint-disable react/prop-types */
import { faChartSimple, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Stats({ likes, dislikes, views }) {
    return (
        <div className="inline-flex items-center gap-8 px-5 mt-5">
            <div className="flex items-center gap-2 text-blue-600">
                <span>{views}</span>
                {<FontAwesomeIcon icon={faChartSimple} />}
            </div>
            <div className="flex items-center gap-2 text-green-500">
                <span>{likes}</span>
                <FontAwesomeIcon icon={faThumbsUp} />
            </div>
            <div className="flex items-center gap-2 text-red-500">
                <span>{dislikes}</span>
                <FontAwesomeIcon icon={faThumbsDown} />
            </div>
        </div>
    )
}
