import React, { useState } from "react";

function Headers(props) {
    return ( <
        >
        <
        title > { props.title } < /title> <
        nav >
        <
        li > Home < /li> <
        li > About < /li> <
        li > List < /li> <
        li > Completed Task < /li> <
        /nav> <
        h1 > Create Your Own { props.title } < /h1> <
        input type = "text"
        placeholder = "Enter the things" / >

        <
        />
    );
}
export default Headers;