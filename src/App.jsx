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

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/user-profile" element={<UserMainLayer />}>
                            <Route path="/user-profile/profile" element={<UserProfile />} />
                            <Route path="/user-profile/settings" element={<UserSettings />}>
                                <Route path="/user-profile/settings/your-account" element={<YourAccount />} />
                                <Route path="/user-profile/settings/monetization" element={<Monetization />} />
                            </Route>
                            <Route path="/user-profile/posts" element={<UserPosts />} />
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
