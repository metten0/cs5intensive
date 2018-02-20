import React, {
  Component
} from 'react';
import logo from './logo.svg';
import BasicComponent from './components/BasicComponent';
import './App.css';

class App extends Component {
  render() {
    return ( <
      div className = "App" >
      <
      header className = "App-header" >
      <
      img src = {
        logo
      }
      className = "App-logo"
      alt = "logo" / >
      <
      h1 className = "App-title" > Welcome to CS5 Intensive! < /h1> < /
      header > <
      p className = "App-intro" >
      Yes!I sort of know how to make a React component! < /
      p > < BasicComponent / > <
      /div>
    );
  }
}

export default App;