import { useEffect, useState } from "react";
import Main from "./Main";
import axios from "axios";
import Friend from "../Friend";

export default function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/users?limit=10`)
            .then(res => setFriends([...friends, ...res.data.users]))
            .catch(e => console.log(e))
            .finally();
    }, []);

    return (
        <Main tab="friends">
            <ul className="grid grid-cols-4 gap-5">
                {friends.map(({ id, firstName, lastName, username, image }) => (
                    <Friend key={id} firstName={firstName} lastName={lastName} username={username} imgLink={image} />
                ))}
            </ul>
        </Main>
    )
}
