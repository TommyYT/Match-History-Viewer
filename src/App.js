import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch("https://api.mozambiquehe.re/bridge?player=heyimlifeline&platform=PC&auth=hrdWSzQtFgQkfEZaW3Ud&history=1&action=info")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });

  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div className="App">
          Data has been loaded.
        </div>
      )
    }
  }
}


  export default App;
