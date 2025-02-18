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
import { useEffect, useState } from "react"

function App() {
        
    const [isLightMode, setIsLightMode] = useState((JSON.parse(localStorage.getItem('isLightMode'))));

    function toggleLightMode() {
        setIsLightMode(!isLightMode);
    }

    useEffect(() => {
        localStorage.setItem("isLightMode", isLightMode);
    }, [isLightMode])

    return (
        <>
            <BrowserRouter basename="/react-vite-specter/">
                <Routes>
                    <Route path="/" element={<Layout lightMode={isLightMode} handleLightMode={toggleLightMode} />}>
                        <Route index element={<Home lightMode={isLightMode} />} />
                        <Route path="user-profile" element={<UserMainLayer lightMode={isLightMode} />}>
                            <Route path="profile" element={<UserProfile />} />
                            <Route path="settings" element={<UserSettings lightMode={isLightMode} />}>
                                <Route path="your-account" element={<YourAccount />} />
                                <Route path="monetization" element={<Monetization />} />
                                <Route path="premium" element={<Premium />} />
                            </Route>
                            <Route path="posts" element={<UserPosts lightMode={isLightMode} />}>
                                <Route path=":id" element={<SinglePostPage lightMode={isLightMode} />} />
                            </Route>
                            <Route path="comments" element={<UserComments lightMode={isLightMode} />} />
                            <Route path="friends" element={<UserFriends lightMode={isLightMode} />} />
                        </Route>
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
