import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Post";
import Main from "./Main";

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
        <Main tab="posts" >
            {isLoading ? <div className="w-[35px] h-[35px] border-5 border-gray-400 border-r-blue-600 rounded-[50%] animate-spin"></div>
                : <ul className="h-full">
                    {
                        posts.map(post => (
                            <Post key={post.id} title={post.title} body={post.body} />
                        ))
                    }
                </ul>}
        </Main>

    )
}
