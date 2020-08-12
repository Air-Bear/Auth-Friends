import React, { useEffect, useState } from "react";
import AddFriend from "./AddFriend";
import Friend from "./Friend";
//import axios from "axios";
import { axiosWithAuth } from "../utils/axiosAuth";

function FriendsList(props){
    const [friends, setFriends] = useState([]);
    
    useEffect(()=>{
        axiosWithAuth().get("http://localhost:5000/api/friends")
        .then(res => {
            setFriends(res.data);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return <>
        <AddFriend setFriends={setFriends} />
        {friends.map(friend => (
            <Friend key={friend.id} friend={friend} />
        ))}
    </>
}

export default FriendsList;