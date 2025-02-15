import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function PostBox({ id, title }) {  
    return (
        <Link to={`http://localhost:5173/user-profile/posts/${id}`}>
            <li className="bg-gray-100 px-5 py-3 cursor-pointer">
                <h2 className="text-xl font-bold">{title}</h2>
            </li>
        </Link>
    )
}
