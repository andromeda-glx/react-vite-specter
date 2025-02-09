/* eslint-disable react/prop-types */
export default function Post({ title, body }) {
    return (
        <li className="border-b p-5">
            <h2 className="text-lg font-bold">{title}</h2>
            <p>{body}</p>
        </li>
    )
}
