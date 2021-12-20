import React from "react";
import '../styles/backgroundStyles.css'


function Header(){

    return (
        <div>

            <div style={{right: "8.2%", top: "1.4%", position: "absolute", color: "gray", fontSize: "12.8px"}}>
                Already have an Intuit account?
            </div>

            <a style={{right: "8.2%", top: "3%", position: "absolute", fontSize: "12.8px", color: "blue"}} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> 
                I forgot my User ID or Password
            </a>

            <button type="button" className="signupbutton"> Sign In </button>
        </div>

    )
}

export default Header