import { useParams } from "react-router-dom";
import Post from "./Post";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SinglePostPage() {
    const [post, setPost] = useState({});

    const { id } = useParams();

    useEffect(() => {

        axios.get(`https://dummyjson.com/posts/${id}`)
            .then(data => setPost(data.data))
            .catch(e => console.log(e))
            .finally();
    }, [id]);


    return (
        post && <Post title={post.title} body={post.body} likes={post.reactions?.likes} dislikes={post.reactions?.dislikes} views={post?.views} />
    )
}
