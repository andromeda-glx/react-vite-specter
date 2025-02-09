import Navbar from "./Navbar";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "../SocialMedia";

export default function Profile() {
    return (
        <main className="p-5 max-w-[1500px] mx-auto">
            <Navbar activeTab="profile" />
            <div className="bg-gray-200 p-10 flex gap-x-10 h-[80vh]">
                <div className="w-[300px] h-[300px]">
                    <img className="w-full h-full rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1610483178766-8092d96033f3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user's profile picture" />
                </div>
                <div className="flex flex-col gap-y-2">
                    <h2 className="text-5xl">Faran</h2>
                    <p className="text-gray-600 font-light text-2xl">@faran-r</p>
                    <p className="text-gray-600 italic">faran.7j99@gmail.com</p>
                    <div className="flex gap-x-6 text-xl mt-5">
                        <SocialMedia name="GitHub" logo={faGithub} link="https://github.com/andromeda-glx" />
                        <SocialMedia name="Twitter/X" logo={faXTwitter} link={"https://x.com/NASA"} />
                    </div>
                </div>
            </div>
        </main>
    )
}
