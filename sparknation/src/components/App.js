import React, { Component } from 'react';
import '../css/App.css';
import SparkNavBar from "./NavigationBar"

class App extends Component{
  constructor() {
    super();
    this.state = {
      my_sparks: [],
      query_text: ""
    }
    this.search_sparks = this.search_sparks.bind(this)
  }

  search_sparks(query) {
    this.setState({query_text: query});
  }

  render() {
    return (
      <main className="page bg-white" id="landingpage">
        <SparkNavBar search_appointments= {this.search_appointments}/>
        <p>List Sparks</p>
      </main>
    );
  }
}

export default App;
