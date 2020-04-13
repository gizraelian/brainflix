import React, { Component } from 'react';
import FirstBox from './FirstBox';
import VidSideBar from './VidSideBar';
import { withRouter, Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

class PageContainer extends Component {

    componentDidMount() {
        const currURL = this.props.match.params.id;
        this.props.fetchMainVid(currURL) 
        this.props.fetchSpecificID(currURL)
    }

    componentDidUpdate(prevProps, prevState) {
        const currURL = this.props.match.params.id;
        if (prevProps.match.params.id !== currURL) 
        {
            this.props.fetchMainVid(currURL) 
            this.props.fetchSpecificID(currURL)
        }
    }

  render() {

    return (
      <div>
        <FirstBox 
        vidLink={this.props.vidStream} 
        specificIdData={this.props.specificIdData}
        onCommentSubmit={this.props.onCommentSubmit}
        currentID={this.props.match.params.id}
        />
        <VidSideBar videoArr={this.props.vidsData} />
      </div>
    )
  }
}

export default PageContainer;