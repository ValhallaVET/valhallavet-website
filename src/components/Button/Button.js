import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  appearance: none;
  background-color: #1F91EB;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  cursor: pointer;
  font-size: 15px;
  padding: 15px 20px;
  text-decoration: none;

  &:hover {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }

  & ~ button {
    margin-left: 20px;
  }
`;

class Button extends Component {
  render() {
    return (
      <StyledButton>
        { this.props.children }
      </StyledButton>
    );
  }
}

export default Button;
