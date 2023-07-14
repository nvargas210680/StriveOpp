import react from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Auth } from "../components/auth";

export default function LoginPage(){
    return(
        <>
        <h1>Login</h1>
        <h3>Or register for a new account here!</h3>

        <Auth />
        </>
    )
}