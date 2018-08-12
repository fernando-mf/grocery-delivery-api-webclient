import * as React from 'react';
import { Button } from 'reactstrap'
import Home from '../Home/Home';
import CommonItemExample from '../Shared/CommonItemExample/CommonItemExample';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Shipping App</h1>
        </header>
        <Button color="danger">Test</Button>
        <Home />
        <CommonItemExample />
      </div>
    );
  }
}

export default App;
