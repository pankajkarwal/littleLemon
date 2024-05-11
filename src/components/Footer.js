import React from "react"
import small_logo from "../images/small_logo.png"

const Footer = () => {
    return(
        <footer>
            <section>
            <div>
                <img src={small_logo} />
            </div>
            <div>
                <h3>Document Navigation</h3>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Login</li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
           
            </div>
           
            </section>
        </footer>
    )
}

export default Footer;