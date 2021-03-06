import React, { Component } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';

// our Zillow Web Services Identification (ZWSID) is: X1-ZWz18phlr8s9vv_a6mew

//let Zillow = require('node-zillow');

// const zwsid = 'X1-ZWz18phlr8s9vv_a6mew'
// var zillow = new Zillow(zwsid)

// var parameters = {
//   zpid: 1111111
// };

// let output = zillow.get('GetZestimate', parameters)
//   .then(function(results) {
//     return results;
//     // results here is an object { message: {}, request: {}, response: {}} 
//   })

// This needs to be updated

class App extends Component {
  constructor() {
    super();

    this.handleCreate = this.handleCreate.bind(this);
    this.handleList = this.handleList.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleCreate(e) {
    // e.preventDefault();
  }

  handleList(e) {
    this.link.classList.add("fade");
    if (this.panel)
      this.panel.classList.remove("fade");
    // e.preventDefault();
  }

  handleBack(e) {
    this.link.classList.remove("fade");
    if (this.panel)
      this.panel.classList.add("fade");
  }

  render() {
    const items = ["Projected Plan", "Course of Actions"];
    const {location} = this.props;
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Example</h1>
        </header>
        <div className="navMenu" ref={el => this.link = el}>
          <Link className="create-link" to="/create" onClick={this.handleCreate} >Create Plan</Link>
          <Link className="list-link" to="/list" onClick={this.handleList} >View Options</Link>
        </div>
        <Switch location={location}>
          <Route exact={true} path="/" />
          <Route path="/create" render={() => (
            <div>Create, constructing</div>
          )} />
          <Route path="/list" render={() => (
            <div className="displayResult fade" ref={el => this.panel = el}>
              {items.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
              <Link className="back" to="/" onClick={this.handleBack}>Back</Link>
              <Route path="/" />
            </div>
          )} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
