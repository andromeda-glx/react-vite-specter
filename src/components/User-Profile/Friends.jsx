import { useEffect, useState } from "react";
import Main from "./Main";
import axios from "axios";
import Friend from "../Friend";
import Spinner from "../Spinner";

export default function Friends() {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://dummyjson.com/users?limit=10`)
            .then(res => setFriends([...friends, ...res.data.users]))
            .catch(e => console.log(e))
            .finally(setIsLoading(false));
    }, []);

    return (
        <Main tab="friends">
            <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 lg:grid-cols-5 xl:grid-cols-6">
                {!isLoading ? friends.map(({ id, firstName, lastName, username, image }) => (
                    <Friend key={id} firstName={firstName} lastName={lastName} username={username} imgLink={image} />
                )): <Spinner />}
            </ul>
        </Main>
    )
}
