import React, { Component } from "react";
import "../css/App.css";
import SparkNavBar from "./NavigationBar";
import DisplaySparks from "./DisplaySparks";

class App extends Component {
  constructor() {
    super();
    this.state = {
      my_sparks: [],
      query_text: "",
      users: []
    };
    this.search_sparks = this.search_sparks.bind(this);
  }

  search_sparks(query) {
    this.setState({ query_text: query });
  }

  componentDidMount() {
    fetch("./spark_data.json")
      .then(response => response.json())
      .then(result => {
        const sparks = result.map(item => {
          return item;
        });
        this.setState({
          my_sparks: sparks
        });
      });
    // Testing out new backend structure
    fetch("/api/users") // Returns a promise
      .then(res => res.json()) // Format the result into JSON
      .then(users =>
        this.setState({ users }, () => console.log("Users fetched...", users))
      ); // Modify state accordingly
  }

  render() {
    return (
      <main className="page bg-white" id="landingpage">
        <SparkNavBar search_sparks={this.search_sparks} />
        <DisplaySparks sparks={this.state.my_sparks} />
      </main>
    );
  }
}

export default App;
