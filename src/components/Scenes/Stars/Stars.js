import React, { Component } from 'react';
import styled from 'styled-components';

import image from './stars.png';

const Wrapper = styled.div`
  bottom: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 4;
`;

class Stars extends Component {
  render() {
    return (
      <Wrapper data-depth={this.props.depth}>
        <img src={image} />
      </Wrapper>
    );
  }
}

export default Stars;
