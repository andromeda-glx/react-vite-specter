import Stats from "./Stats";

/* eslint-disable react/prop-types */
export default function Post({ title, body, likes = 0, dislikes = 0, views = 0 }) {
    return (
        <div className="p-5 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-bold mb-4">{title}</h2>
            <p className="border-y border-gray-400 p-4">{body}</p>
            <Stats likes={likes} dislikes={dislikes} views={views} />
        </div>
    )
}
