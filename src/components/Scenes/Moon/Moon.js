import React, { Component } from 'react';
import styled from 'styled-components';

import image from './moon.png';

const Wrapper = styled.div`
  bottom: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
`;

class Moon extends Component {
  render() {
    return (
      <Wrapper data-depth={this.props.depth}>
        <img src={image} />
      </Wrapper>
    );
  }
}

export default Moon;
