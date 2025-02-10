/* eslint-disable react/prop-types */
import Navbar from "./Navbar";

export default function Main({ tab = "profile", children }) {
    return (
        <main className="p-5 max-w-[1500px] mx-auto">
            <Navbar activeTab={tab} />
            <div className="bg-gray-200 p-10 flex justify-center gap-x-10 items-center h-[80vh] overflow-y-auto">
                {children}
            </div>
        </main>
    )
}
