import React from "react";
import food1 from "../images/food1.avif"
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header>
            <section>
            <div>
            <h2>Little Lemon</h2>
            <h3>India</h3>
            <p>We are four star good rated Restaurant, focused on traditional recipes servred with a modern twist.</p>
            <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
            </div>
            <div>
                <img src={food1} />
            </div>
            </section>
        </header>
    )
}

export default Header;