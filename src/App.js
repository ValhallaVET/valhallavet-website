import React, { Component } from 'react';
import styled from 'styled-components';

import Stage from './components/Stage';
import './App.css';

const Title = styled.h2`
  color: #0F5AD9;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 2vw;
  letter-spacing: 16px;
  margin: 0;
  margin-bottom: auto;
  text-transform: uppercase;
  width: 100%;
`;

const Footer = styled.footer`
  position: relative;
  z-index: 1;
`;

const Links = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Link = styled.a`
  color: #BAC0C4;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stage />
        <Footer>
          <Title>Valhalla Awaits</Title>
          <Links>
            <Link href="https://github.com/ValhallaVET">Github</Link>
          </Links>
        </Footer>
      </div>
    );
  }
}

export default App;
