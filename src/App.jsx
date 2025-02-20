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
import { LightModeContext } from "./contexts/LightModeContext"
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
            <LightModeContext.Provider value={{lightMode: isLightMode, handleLightMode: toggleLightMode}}>
                <BrowserRouter basename="/react-vite-specter/">
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="/user-profile" element={<UserMainLayer />}>
                                <Route index element={<UserProfile />} />
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
            </LightModeContext.Provider>
        </>
    )
}

export default App
