import styled from 'styled-components';
import { getColor } from '../../../../utils';

export const Button = styled.button(
  ({ type }) => `
  cursor: pointer;
  position: relative;
  text-decoration: inherit;
  font-family: system-ui;
  padding: 8px 16px;
  color: #fff;
  text-align: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 0;
  z-index: 1;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.75);

  &:after {
    content: '';
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    z-index: -1;
    position: absolute;
    background: #333;
    text-decoration: inherit;
    font-family: system-ui;
    text-align: center;
    border-radius: 50%;
  }

  &:active:after {
    background: #111;
  }

  background-image: ${getColor(type)};

  &:active {
    background: ${getColor(type)};
  }
`
);
