import React, { Component } from 'react';
import CommentsArea from './CommentsArea';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const api_key = '?api_key=0e65c229-548c-48d6-9725-af43bf702818';
const baseUrl = 'http://localhost:8080/videos/';

class FirstBox extends Component{

commentSubmit = (e) => {
    e.preventDefault();
    let nuComment = {comment: e.target.commentInput.value};
        const pathUrl = this.props.currentID;
        const init = {
            method: "POST",
            body: JSON.stringify(nuComment),
            headers:{
                'Content-Type': 'application/json'
                }
        }
    fetch(baseUrl + pathUrl + '/comments', init).then((response) => {
            return response.text();
        })
        .then((text) => {
            return text;
        })
}

render(){

return (
<div className="firstBox">
    <div className="firstBox__videoContainer">
    <video
        className="firstBox__videoContainer--videoPlayer" 
        poster="../assets/Images/maxresdefault.jpg" 
        controls
        src={this.props.specificIdData.video + api_key}>
        
    </video>
    </div>
    <div className="firstBox__videoTitleContainer">
        <div className="firstBox__videoTitleContainer--upperContainer">
            {this.props.specificIdData.title}
        </div>
        <div className="firstBox__videoTitleContainer--lowerContainer">
        {this.props.specificIdData.views}
                <div className="firstBox__videoTitleContainer--lowerContainer__rightBox">
                    <div className="firstBox__videoTitleContainer--lowerContainer__rightBox--elements">
                        <img src="../assets/icons/Thumbs Up.svg"
                            className="firstBox__videoTitleContainer--lowerContainer__rightBox--elements__num"
                        ></img>
                        <a className="firstBox__videoTitleContainer--lowerContainer__rightBox--elements__num"> {this.props.specificIdData.thumbsUp} 
                        </a>
                    </div>
                    <div className="firstBox__videoTitleContainer--lowerContainer__rightBox--elements">
                        <img src="../assets/icons/Thumbs Down.svg"
                            className="firstBox__videoTitleContainer--lowerContainer__rightBox--elements__num"
                        >
                        </img>
                        <a className="firstBox__videoTitleContainer--lowerContainer__rightBox--elements__num"> 
                        {this.props.specificIdData.thumbsDown} 
                        </a>
                    </div>
                    <div className="firstBox__videoTitleContainer--lowerContainer__rightBox--elements">
                        <img src="../assets/icons/Share.svg"
                            className="firstBox__videoTitleContainer--lowerContainer__rightBox--elements__num"
                        ></img>
                        <a className="firstBox__videoTitleContainer--lowerContainer__rightBox--elements__num">SHARE</a>
                    </div>
                </div>
        </div>
    </div>

    <div className="firstBox__videoInfoContainer">
        <div className="firstBox__videoInfoContainer--upperBox">
            <div className="firstBox__videoInfoContainer--upperBox__leftContainer">
                <span className="firstBox__videoInfoContainer--upperBox__leftContainer--avatar">
                </span>

                <div className="firstBox__videoInfoContainer--upperBox__leftContainer--container">
                    <label className="firstBox__videoInfoContainer--upperBox__leftContainer--container__user">
                    {this.props.specificIdData.channel}
                    </label>
                    <label className="firstBox__videoInfoContainer--upperBox__leftContainer--container__date">
                        {"Published on Oct 14, 2015"}
                    </label>
                </div>
            </div>
        
            <div className="firstBox__videoInfoContainer--upperBox__rightContainer">
                <button className="firstBox__videoInfoContainer--upperBox__rightContainer--button">
                {'SUBSCRIBE '}
                    <label className="firstBox__videoInfoContainer--upperBox__rightContainer--button__label">
                    {this.props.specificIdData.subscriberCount}
                    </label>
                </button>
            </div>
        </div>
        <div className="firstBox__videoInfoContainer--description">
            {this.props.specificIdData.description}
        </div>
        <label className="firstBox__videoInfoContainer--showMore">
            SHOW MORE
        </label>
    </div>

    <div className = "commentArea">
    <form   onSubmit={this.commentSubmit}
            id="commentsForm">
        <label className = "commentArea__avatar">
            <img    src="../assets/images/john_gibbons.jpg"
                    className="commentArea__avatar--img"
            ></img>
        </label>
        <label className = "commentArea__container">
            <input 
            className = "commentArea__container--input"
            type = "text"
            id = "commentsInputText"
            name="commentInput"
            />
        </label>
        <div className = "commentArea__bottomRightContainer">
            <button className = "commentArea__bottomRightContainer--cancelButt">CANCEL</button>
            <button className = "commentArea__bottomRightContainer--commentButt"
            >COMMENT</button>
        </div>
    </form>
    </div>
    <CommentsArea specificIdData={this.props.specificIdData} />
</div>
        )
    }
}

export default FirstBox;
