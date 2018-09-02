import React, { Component } from 'react';
import styled from 'styled-components';
import Media from 'react-media';

import Stage from './components/Stage';
import './App.css';

const StyledApp = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  width: 100vw;

  @media all and (max-width: 960px) {
    background: #0F5AD9;
    padding: 10vw;
  }
`;

const Title = styled.h2`
  color: #0F5AD9;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 2vmax;
  letter-spacing: 16px;
  margin: 0;
  margin-bottom: auto;
  text-transform: uppercase;
  width: 100%;

  @media all and (max-width: 960px) {
    color: #ffffff;
    font-size: 6vw;
    line-height: 1.5em;
  }
`;

const Footer = styled.footer`
  margin: 0 auto;
  margin-top: 30px;
  position: relative;
  z-index: 1;
  width: 10vmax;

  @media all and (max-width: 960px) {
    p {
      color: #ffffff;
    }
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Link = styled.a`
  color: #7D8794;
  display: inline-block;
  font-family: 'Muli', sans-serif;
  font-weight: 600;
  margin: 0 20px;
  position: relative;

  @media all and (max-width: 960px) {
    color: #ffffff;
  }

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

    @media all and (max-width: 960px) {
      background: #ffffff;
    }
  }

  &:hover {
    color: #0F5AD9;

    &:after {
      background: #0F5AD9;
      width: 100%;

      @media all and (max-width: 960px) {
        background: #140A5E;
      }
    }

    @media all and (max-width: 960px) {
      color: #140A5E;
    }
  }
`;

const Body = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Description = styled.p`
  margin: 0 auto;
  width: 30vmax;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Media query="(min-width: 960px)" render={() => (
          <Stage />
        )} />
        <Body>
          <Title>Valhalla Awaits</Title>
          <Description>We’re the unofficial community-driven development community for VeChain. We build sites, tools, and dapps for the benefit of the VeChain ecosystem. Please join us and let’s build something incredible together.</Description>
        </Body>
        <Footer>
          <Links>
            <Link href="https://github.com/ValhallaVET">Github</Link>
            <Link href="mailto:1800kenneth@gmail.com">Contact</Link>
          </Links>
        </Footer>
      </StyledApp>
    );
  }
}

export default App;
