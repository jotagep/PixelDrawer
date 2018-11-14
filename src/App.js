import React, { Component } from 'react';
import './App.css';

// Components
import Panel from './containers/Panel/Panel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Panel />
        <footer> 
          Made with <span role="img" aria-label="Heart">❤️</span> by 
          <a href="https://jotagep.com/" target="_blank" rel='noreferrer noopener'>
            <strong> Jorge G. Palacin</strong>
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
