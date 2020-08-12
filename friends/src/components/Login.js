import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

function Login (){
    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    function submitHandler(event){
        event.preventDefault();
        
        //make request with login info on submit
        axios.post("http://localhost:5000/api/login", form)
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data.payload);
            this.props.history.push("/");
        })
        .catch(err => {
            console.log(err);
        });

        console.log("form: ", form);
    };

    function changeHandler(event){
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    return <form onSubmit={submitHandler}>
        <label htmlFor="name">Name </label>
        <input  className="formInput" type="text" name="username" id="name" value={form.username} onChange={changeHandler} />
        <label htmlFor="password">Password </label>
        <input className="formInput" type="password" name="password" id="password" value={form.password} onChange={changeHandler} />
        <button className="formButton" type="submit">submit</button>
    </form>
}

export default Login;