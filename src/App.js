import React, { Component } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';

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
    const items = ["Google", "Yahoo", "Yandex", "DuckDuckGo"];
    const {location} = this.props;
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Example</h1>
        </header>
        <div className="navMenu" ref={el => this.link = el}>
          <Link className="create-link" to="/create" onClick={this.handleCreate} >Create</Link>
          <Link className="list-link" to="/list" onClick={this.handleList} >View List</Link>
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
