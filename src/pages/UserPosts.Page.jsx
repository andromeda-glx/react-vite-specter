import { Outlet } from "react-router-dom";
import Posts from "../components/User-Posts/Posts";

export default function UserPosts() {


    return (
        <div className="grid grid-cols-12 h-[100%]">
            <div className="col-start-1 col-end-5 h-[100%] overflow-y-hidden">
                <Posts />
            </div>
            <div className="col-start-5 -col-end-1 p-5">
                <Outlet />
            </div>
        </div>
    )
}
