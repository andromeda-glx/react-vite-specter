import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
    return (
        <>
            <Header />
            <main className="px-5 flex flex-col items-center">
                <div>This is the Home page</div>
                <Link to="/user-profile">
                    <button className="bg-blue-600 text-white w-80 p-3 cursor-pointer rounded-md">
                        Go to your profile
                    </button>
                </Link>
            </main>
        </>
    )
}
