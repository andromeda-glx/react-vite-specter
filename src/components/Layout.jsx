import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
    return (
        <>
            <Header />
            <main className="px-5 flex flex-col items-center min-h-dvh">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
