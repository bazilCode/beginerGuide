import React from "react";
import { Link } from "react-router-dom";

import './header.css'

export default function Header(){

const styleLink={
textDecoration : "none",
paddingLeft : "10px"
}


    return(
        <div className="header" >
            <div>BEGINER TO PRO</div>
            <div className="link">
            <Link to={"/home"} style={styleLink}>HOME</Link>
            <Link to={"/add"} style={styleLink}>ADD STUD</Link>
            <Link to={"/about" }style={styleLink}>ABOUT</Link>
            </div>
        </div>
    )
}