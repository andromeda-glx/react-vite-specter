import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useContext } from "react";
import { LightModeContext } from "../contexts/LightModeContext";

export default function Layout() {
    const {lightMode} = useContext(LightModeContext);

    return (
        <>
            <Header />
            <main className={`px-5 flex flex-col items-center justify-center min-h-dvh ${lightMode ? "bg-white text-black" : "bg-gray-900 text-white"} transition-colors`}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
