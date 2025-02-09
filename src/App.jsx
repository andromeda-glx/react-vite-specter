import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserProfile from "./pages/UserProfile.Page"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<UserProfile />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
