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
  margin-top: 20px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Links = styled.div`
 text-align: center;
`;

const Link = styled.a`
  color: #7D8794;
  display: inline-block;
  font-family: 'Muli', sans-serif;
  font-weight: 600;
  position: relative;

  &:after {
    background: #7D8794;
    bottom: -12px;
    content: "";
    display: block;
    width: 50%;
    height: 3px;
    left: 0;
    right: 0;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    transition: all .08s linear;
  }

  &:hover {
    color: #0F5AD9;

    &:after {
      background: #0F5AD9;
      width: 100%;
    }
  }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stage />
        <Footer>
          <Title>Valhalla Awaits</Title>
          <p>We’re the unofficial community-driven development community for VeChain. <br />We build sites, tools, and dapps for the benefit of the VeChain ecosystem. <br />Please join us and let’s build something incredible together</p>
          <Links>
            <Link href="https://github.com/ValhallaVET">Github</Link>
          </Links>
        </Footer>
      </div>
    );
  }
}

export default App;
