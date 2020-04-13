import React, { Component } from 'react'
import CommentsForm from './CommentsForm';

export default class CommentsArea extends Component {

render() {

let commentsArray = this.props.specificIdData.comments;
let commentsForms = [];

    for(var i=0;i<commentsArray.length; i++){
        let comment = <CommentsForm
        name={commentsArray[i].name}
        comment={commentsArray[i].comment}
        id={commentsArray[i].id}
        timestamp={commentsArray[i].timestamp}
        />
      commentsForms.push(comment);
    }

    return (
<div>
    { commentsForms }
</div>

    )
  }
}
