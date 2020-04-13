import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';

class NavBar extends Component{
    render(){
        return (
            <nav className="navbar">
                <div className="navbar__leftContainer">
                    <label className="navbar__leftContainer--logoContainer">
                        <Link to={"/"}>
                            <img src="../assets/icons/BrainFlix Logo.svg" className="navbar__leftContainer--logoContainer__logo"></img>
                        </Link>
                    </label>
                    <label className="navbar__leftContainer--searchBox">
                        <input
                        type="text"
                        className="navbar__leftContainer--searchBox__input"
                        />
                        <button className="navbar__leftContainer--searchBox__button">
                        <img src="../assets/icons/Search.svg" className="navbar__leftContainer--searchBox__button--logo"></img>
                        </button>
                    </label>
                </div>
                <div className="navbar__rightContainer">
                    <label className="navbar__rightContainer--addVid">
                        <Link to={"/upload"}>
                            <img src="../assets/icons/Content Upload.svg" className="navbar__rightContainer--addVid__Icon"></img>
                        </Link>
                    </label>
                    <label className="navbar__rightContainer--user">
                        <img src="../assets/images/john_gibbons.jpg"
                            className="navbar__rightContainer--user__img"
                        ></img>
                    </label>
                </div>
            </nav>
        )
    }
}

export default NavBar;
