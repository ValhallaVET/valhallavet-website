import React, { Component } from 'react';
import styled from 'styled-components';

import image from './clouds.png';

const Wrapper = styled.div`
  bottom: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 5;
`;

class Clouds extends Component {
  render() {
    return (
      <Wrapper data-depth={this.props.depth}>
        <img src={image} />
      </Wrapper>
    );
  }
}

export default Clouds;
