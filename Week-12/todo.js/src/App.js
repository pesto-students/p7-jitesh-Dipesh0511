import './App.css';
import "./styles.css";
import Headers from './Header.js';
import Todos from './Todos.js';
import Footer from './Footer.js';
import React, { useState } from "react";


export default function App() {
    let { list, update } = useState([{
        S_no: 1,
        Task: "Go To MArket"
    }, {
        S_no: 2,
        Task: "Go To Ghat"
    }, {
        S_no: 3,
        Task: "Go To Villa"
    }])
    return ( < >
        <
        Headers title = "Todos List"
        searchbar = "true" / >
        <
        Todos list = { list[0] }
        update = { update }
        /> <
        Footer / >
        <
        />
    )
}