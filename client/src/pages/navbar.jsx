import React, { useState } from "react";
import { ReactDOM } from "react";
import { Button, Card, Dropdown, Header, Input, Icon, Image, Menu, Sidebar } from 'semantic-ui-react';
import { SearchBar } from "../components/SearchBar";

export default function NavigationBar(){
    return(
        <>
        <div className="navbar">
        <head className="navbar">
        
            <title>Underline Link Hover</title>

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="App.css" />
        </head>

            <nav>
                <a href="/">Home</a>
                <a href="/database">Scholarship Database</a>
                <a href="/mentorship">Mentors & Mentees</a>
                <a href="/team">Meet the Team</a>
                <a href="/about">About</a>
            </nav>

        </div>
        </>
        )
    }