import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div>This is the Home page</div>
            <Link to="/user-profile">
                <button className="bg-blue-600 text-white w-80 p-3 cursor-pointer rounded-md">
                    Go to your profile
                </button>
            </Link>
        </>
    )
}
