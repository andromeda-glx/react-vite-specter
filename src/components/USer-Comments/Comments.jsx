import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "./Comment";
import Spinner from "../Spinner";

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [loadMore, setLoadMore] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://dummyjson.com/comments?limit=10&skip=${comments.length}`)
            .then(res => setComments([...comments, ...res.data.comments]))
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false));
    }, [loadMore]);

    return (
        <div className="p-10">
            <h1 className="text-xl font-bold mb-5">Your Comments</h1>
            <ul className="h-full w-full flex flex-col gap-y-5">
                {
                    comments.map(({ id, body, likes }) => <Comment key={id} text={body} likes={likes} />)
                }
                <div className="w-full flex flex-col justify-center items-center">
                    <button className="bg-blue-600 my-5 px-5 py-3 text-lg font-semibold text-white cursor-pointer rounded-md" onClick={() => setLoadMore(!loadMore)}>
                        {isLoading ? <Spinner /> : "Load more comments"}
                    </button>
                </div>
            </ul>
        </div>
    )
}
