import * as React from 'react';
import Home from '../Home/Home';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Grocery Delivery App</h1>
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
