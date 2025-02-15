import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserProfile from "./pages/UserProfile.Page"
import UserSettings from "./pages/UserSettings.Page"
import Home from "./pages/Home.Page"
import UserPosts from "./pages/UserPosts.Page"
import UserComments from "./pages/UserComments.Page"
import UserFriends from "./pages/UserFriends.Page"
import PageNotFound from "./pages/PageNotFound"
import Layout from "./components/Layout"
import UserMainLayer from "./components/UserMainLayer"
import YourAccount from "./components/User-Settings/Settings-Options/YourAccount"
import Monetization from "./components/User-Settings/Settings-Options/Monetization"
import Premium from "./components/User-Settings/Settings-Options/Premium"
import SinglePostPage from "./components/User-Posts/SinglePostPage"
import { useState } from "react"

function App() {
    const [isLightMode, setIsLightMode] = useState(true);

    function toggleLightMode(){
        setIsLightMode(!isLightMode);
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout lightMode={isLightMode} handleLightMode={toggleLightMode} />}>
                        <Route path="/" element={<Home lightMode={isLightMode} />} />
                        <Route path="/user-profile" element={<UserMainLayer />}>
                            <Route path="/user-profile/profile" element={<UserProfile />} />
                            <Route path="/user-profile/settings" element={<UserSettings />}>
                                <Route path="/user-profile/settings/your-account" element={<YourAccount />} />
                                <Route path="/user-profile/settings/monetization" element={<Monetization />} />
                                <Route path="/user-profile/settings/premium" element={<Premium />} />
                            </Route>
                            <Route path="/user-profile/posts" element={<UserPosts />}>
                                <Route path="/user-profile/posts/:id" element={<SinglePostPage />} />
                            </Route>
                            <Route path="/user-profile/comments" element={<UserComments />} />
                            <Route path="/user-profile/friends" element={<UserFriends />} />
                        </Route>
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
