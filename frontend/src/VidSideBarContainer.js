import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';

class VidSideBarContainer extends Component{
    render(){
        return (
            
<div className="vidSideBar__container">
        <label className="vidSideBar__container--thumbnailBox">
            <Link to={'/videos/'+this.props.id}>
                <img src={this.props.image}
                    className="vidSideBar__container--thumbnailBox__img"
                ></img>
            </Link>
        </label>
    <div className="vidSideBar__container--infoBox">
        <label className="vidSideBar__container--infoBox__title">
            { this.props.title } 
        </label>
        <label className="vidSideBar__container--infoBox__userName">
            { this.props.channel } 
        </label>
        <label className="vidSideBar__container--infoBox__numViews">
            { this.props.views }
        </label>
    </div>
</div>
            
        )
    }
}

export default VidSideBarContainer;
