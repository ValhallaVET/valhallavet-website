import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './components/Button';
import Stage from './components/Stage';
import './App.css';

const Footer = styled.footer`
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stage />
        <Footer>
          <Button>Github</Button>
          <Button>Test</Button>
        </Footer>
      </div>
    );
  }
}

export default App;
