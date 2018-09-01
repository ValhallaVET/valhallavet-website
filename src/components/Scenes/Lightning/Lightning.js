import React, { Component } from 'react';
import styled from 'styled-components';

import image from './lightning.png';

const Wrapper = styled.div`
  bottom: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

class Lightning extends Component {
  render() {
    return (
      <Wrapper data-depth={this.props.depth}>
        <img src={image} />
      </Wrapper>
    );
  }
}

export default Lightning;
