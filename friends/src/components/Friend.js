import React from "react";

function Friend(props){
    return<div className="friendCard">
    {/*implement friends or whatever people with friends do.*/}

        <h2>{props.friend.name}</h2>
        <h3>{props.friend.email}</h3>
        <h3>{props.friend.age}</h3>
    </div>
}

export default Friend;