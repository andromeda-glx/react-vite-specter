import { useEffect, useState } from "react";
import axios from "axios";
import Friend from "./Friend";
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
        <>
            <div className="grid grid-cols-10">
                <nav className="col-start-1 col-end-4 p-1">
                    {isLoading ? <Spinner /> :
                        <ul className="flex flex-col gap-y-1">
                            {friends.map(({ id, firstName, lastName, username, image }) => (
                                <Friend key={id} firstName={firstName} lastName={lastName} username={username} imgLink={image} />
                            ))}
                        </ul>
                    }
                </nav>
                <div className="col-start-4 -col-end-1">
                </div>
            </div>
        </>
    )
}
