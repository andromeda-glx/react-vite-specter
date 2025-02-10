import { useEffect, useState } from "react";
import Main from "./Main";
import axios from "axios";
import Friend from "../Friend";

export default function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/users?limit=10&skip=${friends.length}`)
            .then(res => setFriends([...friends, ...res.data.users]))
            .catch(e => console.log(e))
            .finally();
    }, []);

    return (
        <Main tab="friends">
            <ul className="grid grid-cols-4 gap-5">
                {friends.map(({id, firstName, lastName, username, image}) => (
                    <Friend key={id} firstName={firstName} lastName={lastName} username={username} imgLink={image} />
                ))}
                {/* <Friend username={"Andromeda"} firstName={"Faran"} lastName={"Rostami"} imgLink={"https://moderncat.com/wp-content/uploads/2014/03/bigstock-46771525_Andrey_Kuzmin-1-1440x980.jpg"} />
                <Friend username={"Andromeda"} firstName={"Faran"} lastName={"Rostami"} />
                <Friend username={"Andromeda"} firstName={"Faran"} lastName={"Rostami"} />
                <Friend username={"Andromeda"} firstName={"Faran"} lastName={"Rostami"} />
                <Friend username={"Andromeda"} firstName={"Faran"} lastName={"Rostami"} />
                <Friend username={"Andromeda"} firstName={"Faran"} lastName={"Rostami"} />
                <Friend username={"Andromeda"} firstName={"Faran"} lastName={"Rostami"} />
                <Friend username={"Andromeda"} firstName={"Faran"} lastName={"Rostami"} /> */}
            </ul>
        </Main>
    )
}
