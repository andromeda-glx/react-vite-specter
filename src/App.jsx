import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserProfile from "./pages/UserProfile.Page"
import UserSettings from "./pages/UserSettings.Page"
import Home from "./pages/Home.Page"
import UserPosts from "./pages/UserPosts.Page"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user-profile" element={<UserProfile />} />
                    <Route path="/user-settings" element={<UserSettings />} />
                    <Route path="/user-posts" element={<UserPosts />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
