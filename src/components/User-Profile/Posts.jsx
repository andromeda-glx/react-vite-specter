import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Post";
import Main from "./Main";
import Spinner from "../Spinner";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadMore, setLoadMore] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://dummyjson.com/posts?limit=10&skip=${posts.length}`)
            .then(res => setPosts([...posts, ...res.data.posts]))
            .catch(e => console.log(e))
            .finally(() => {
                setIsLoading(false);
            });
    }, [loadMore]);

    return (
        <Main tab="posts" >
            <ul className="h-full w-full flex flex-col gap-y-5">
                {
                    posts.map(({ id, title, body, views, reactions }) => (
                        <Post key={id} title={title} body={body} likes={reactions.likes} dislikes={reactions.dislikes} views={views} />
                    ))
                }
                <div className="w-full flex flex-col justify-center items-center">
                    <button className="bg-blue-600 my-5 px-5 py-3 text-lg font-semibold text-white cursor-pointer rounded-md" onClick={() => setLoadMore(!loadMore)}>
                        {isLoading ? <Spinner /> : "See older posts"}
                    </button>
                </div>
            </ul>
        </Main>

    )
}
