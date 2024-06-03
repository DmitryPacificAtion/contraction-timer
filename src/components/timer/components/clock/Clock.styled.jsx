import styled from 'styled-components';
import { getColor } from '../../../../utils';

export const Clock = styled.div(
  ({ type }) => `
  font-size: 32px;
  text-transform: uppercase;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: cover;
  background-position: left;
  background-image: ${getColor(type)};
`
);
