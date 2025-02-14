import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserProfile from "./pages/UserProfile.Page"
import UserSettings from "./pages/UserSettings.Page"
import Home from "./pages/Home.Page"
import UserPosts from "./pages/UserPosts.Page"
import UserComments from "./pages/UserComments.Page"
import UserFriends from "./pages/UserFriends.Page"
import PageNotFound from "./pages/PageNotFound"
import Layout from "./components/Layout"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/user-profile" element={<UserProfile />} />
                        <Route path="/user-settings" element={<UserSettings />} />
                        <Route path="/user-posts" element={<UserPosts />} />
                        <Route path="/user-comments" element={<UserComments />} />
                        <Route path="/user-friends" element={<UserFriends />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
