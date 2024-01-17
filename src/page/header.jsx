import React from "react";
import { Link } from "react-router-dom";
import "./totalStyles.css"
const Header = () => {
    return (
        <div className="header_style">
            <h1 className="header_style__h1">
                <Link to="/" className="header_link_style">SHARETRADE.<small className="header_link_style_smallText" >COM</small>
                </Link>
            </h1>
        </div>
    )
}
export default Header;