import React, { Component } from 'react'

export default class CommentForm extends Component {
  render() {

    return (
      <div className="commentsList">
        <div className="commentsList__left">
            <img    src="../assets/images/john_gibbons.jpg"
                    className="commentArea__avatar--img"
            ></img>
        </div>
        <div className="commentsList__right">
          <div className="commentsList__right--upper">
            <span className="commentsList__right--upper__name">
              { this.props.name }
            </span>
            <span className="commentsList__right--upper__time">
              { this.props.timestamp }
            </span>
          </div>
          <span className="commentsList__right--lower">
              { this.props.comment }
          </span>
        </div>
      </div>
    )
  }
}
