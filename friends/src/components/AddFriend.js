import React, { useState } from "react";
import axiosAuth, { axiosWithAuth } from "../utils/axiosAuth";

function AddFriend (props){
    const [form, setForm] = useState({
        id: Date.now(),
        name: "",
        age: "",
        email: ""
    });

    function changeHandler(event){
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    function submitHandler(event){
        event.preventDefault();

        axiosWithAuth().post("http://localhost:5000/api/friends", form)
        .then(res => {
            props.setFriends(res.data);
        });

        setForm({
            id: Date.now(),
            name: "",
            age: "",
            email: ""
        });
    };

    return <form onSubmit={submitHandler}>
        <h1 className="formTitle">Add Friend </h1>
        <label htmlFor="name">Name </label>
        <input className="formInput" type="text" name="name" id="name" value={form.name} onChange={changeHandler} />
        <label htmlFor="age">Age </label>
        <input className="formInput" type="text" name="age" id="age" value={form.age} onChange={changeHandler} />
        <label htmlFor="email">Email </label>
        <input className="formInput" type="email" name="email" id="email" value={form.email} onChange={changeHandler} />
        <button className="formButton" type="submit">submit</button>
    </form>
}

export default AddFriend;