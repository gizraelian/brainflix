import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Upload from './Upload';
import PageContainer from './PageContainer';
import { withRouter, Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const baseUrl = 'http://localhost:8080';
const pathVideos = '/videos';

class App extends Component {

state = {
  vids: [],
  currentVid: {},
  specificData: {comments:[]}
}

componentDidMount() {
  fetch(baseUrl + pathVideos)
  .then(response => response.json())
  .then(data => {
    this.setState({
      vids: data
    })
  });
}  

fetchMainVid = (currentParam) => {
  fetch(baseUrl + pathVideos + '/' + currentParam)
  .then(response => response.json())
  .then(data => {
    this.setState({
      currentVid: data
    })
  })
}

fetchSpecificID = (currentParam) => {
  
  fetch(baseUrl + pathVideos + '/' + currentParam)
  .then(response => response.json())
  .then(idData => {
    this.setState({
      specificData: idData
    })
  })
}

render() {

  return (
    <Router>
      <div className="App">
        <NavBar />
          <Switch>
            <Route path={"/"}exact render={() => {return<Redirect to={"/videos/0"}/>}}/>
            <Route path={"/videos/:id"}exact render={(props) => {return<PageContainer {...props} vidsData={this.state.vids}
            fetchMainVid={this.fetchMainVid} 
            fetchSpecificID={this.fetchSpecificID} 
            specificIdData={this.state.specificData}
            onCommentSubmit={this.onCommentSubmit}
              />}}/>
              <Route path={"/Upload"} component={Upload} />
          </Switch>
      </div>
    </Router>
  );
}
}

export default withRouter (App);
