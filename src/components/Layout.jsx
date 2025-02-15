/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({lightMode, handleLightMode}) {
    return (
        <>
            <Header lightMode={lightMode} handleLightMode={handleLightMode} />
            <main className="px-5 flex flex-col items-center justify-center min-h-dvh">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
