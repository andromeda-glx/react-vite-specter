import { useParams } from "react-router-dom";
import Post from "./Post";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Spinner";

export default function SinglePostPage() {
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://dummyjson.com/posts/${id}`)
            .then(data => setPost(data.data))
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false));
    }, [id]);


    return (
        post &&
            isLoading ? <Spinner /> :
            <Post
                title={post.title}
                body={post.body}
                likes={post.reactions?.likes}
                dislikes={post.reactions?.dislikes}
                views={post?.views}
            />
    )
}
