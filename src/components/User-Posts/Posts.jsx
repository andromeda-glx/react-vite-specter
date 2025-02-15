import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Spinner";
import PostBox from "./PostBox";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadMore, setLoadMore] = useState(false);

    function fetchAllPosts() {
        setIsLoading(true);
        axios.get(`https://dummyjson.com/posts?limit=10&skip=${posts.length}`)
            .then(res => setPosts([...posts, ...res.data.posts]))
            .catch(e => console.log(e))
            .finally(() => {
                setIsLoading(false);
            });
    }

    useEffect(() => {
        fetchAllPosts();
    }, [loadMore]);

    return (
        <nav className="p-2 bg-gray-700 h-full overflow-y-auto">
            <ul className="h-full w-full flex flex-col gap-y-5">
                {
                    // posts.map(({ id, title, body, views, reactions }) => (
                    //     <Post key={id} title={title} body={body} likes={reactions.likes} dislikes={reactions.dislikes} views={views} />
                    // ))
                    posts.map(({ id, title }) => <PostBox key={id} id={id} title={title} />)
                }
                <div className="w-full flex flex-col justify-center items-center">
                    <button className="bg-blue-600 my-5 px-5 py-3 text-lg font-semibold text-white cursor-pointer rounded-md" onClick={() => setLoadMore(!loadMore)}>
                        {isLoading ? <Spinner /> : "See older posts"}
                    </button>
                </div>
            </ul>
        </nav>
    )
}
