import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

export default class App extends React.Component {

  state = {
    loading: true,
    name: null,
    Caustic: null,
  };

  async componentDidMount() {
    const url = "https://api.mozambiquehe.re/bridge?player=funfps&platform=PC&auth=hrdWSzQtFgQkfEZaW3Ud";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ name: data.global.name, Caustic: data.legends.all.Caustic , loading: false });
    console.log(data.global.name);
  };

  render() {
    return <div>
      {this.state.loading || !this.state.name ?
        (<div>loading...</div>) : (<div><p>Name: {this.state.name}</p>
        <p>Caustic: {this.state.Caustic.kills} </p></div>)}
    </div>;
  }


}
