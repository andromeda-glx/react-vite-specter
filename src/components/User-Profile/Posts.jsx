import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Post from "../Post";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setPosts([...res.data]))
            .catch(e => console.log(e))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <main className="p-5 max-w-[1500px] mx-auto">
            <Navbar activeTab="posts" />
            <div className="bg-gray-200 p-10 flex justify-center gap-x-10 h-[80vh] overflow-y-auto">
                {isLoading ? <div className="w-[35px] h-[35px] border-5 border-gray-400 border-r-blue-600 rounded-[50%] animate-spin"></div>
                : <ul>
                    {
                        posts.map(post => (
                            <Post key={post.id} title={post.title} body={post.body} />
                        ))
                    }
                </ul>}
            </div>
        </main>
    )
}
