import { useContext } from "react";
import Stats from "./Stats";
import { LightModeContext } from "../../contexts/LightModeContext";

/* eslint-disable react/prop-types */
export default function Post({ title, body, likes = 0, dislikes = 0, views = 0 }) {
    const {lightMode} = useContext(LightModeContext);

    return (
        <div className={`p-5 ${lightMode ? "bg-gray-50 text-black" : "bg-gray-900 text-white"} rounded-lg transition-colors`}>
            <h2 className="text-lg font-bold mb-4">{title}</h2>
            <p className="border-y border-gray-400 p-4">{body}</p>
            <Stats likes={likes} dislikes={dislikes} views={views} />
        </div>
    )
}
