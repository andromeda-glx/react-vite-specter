import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "./SocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
    return (
        <>
            <div className="w-full h-full flex flex-col items-start gap-10 p-10 overflow-y-auto">
                <div className="w-[250px] h-[250px] mx-auto">
                    <img className="w-full h-full rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1610483178766-8092d96033f3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user's profile picture" />
                </div>
                <div className="flex flex-col gap-y-5">
                    <div className="flex items-baseline gap-x-2">
                        <h2 className="text-5xl">Faran</h2>
                        <p className="text-gray-600 font-light text-2xl">@faran-r</p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p className="text-gray-600 italic">faran.7j99@gmail.com</p>
                    </div>
                    <div className="">
                        <h3 className="text-lg font-semibold">About me:</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nunc sapien. Sed eget urna eu augue malesuada facilisis nec ut neque. Donec mollis nisl vitae nibh tempor aliquam. Vestibulum vitae tempus massa. Quisque consectetur egestas consectetur. Vestibulum eleifend imperdiet enim, tincidunt pellentesque nunc semper vel. Donec finibus, nisi non malesuada scelerisque, dui est efficitur arcu, in consequat ex nisi malesuada est.
                        </p>
                    </div>
                    <h3 className="text-xl font-semibold">Find me on:</h3>
                    <div className="flex gap-x-6 text-xl mb-5">
                        <SocialMedia name="GitHub" logo={faGithub} link="https://github.com/andromeda-glx" />
                        <SocialMedia name="Twitter/X" logo={faXTwitter} link={"https://x.com/NASA"} />
                    </div>
                </div>
            </div>
        </>
    )
}
