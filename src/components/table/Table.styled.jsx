import styled from 'styled-components';
import { getColor } from '../../utils';

const TableWrapper = styled.section`
  width: 100%;
  height: 100%;
  background: #2e2e2e;
  border-spacing: 0;
  position: absolute;
  z-index: 1010;
  top: 100%;
  transition: top 0.8s ease-in-out;
  &.show-table {
    top: 20%;
  }
`;
const ShowButton = styled.button`
  width: 180px;
  height: 30px;
  border-radius: 16px;
  box-shadow: 0px 0px 60px 0px rgba(255, 255, 255, 1);
  cursor: pointer;
  background: #2e2e2e;
  position: absolute;
  z-index: 1020;
  margin-bottom: 10px;
  left: calc(50% - 90px);
  top: -10%;
  &::before,
  &::after {
    position: absolute;
    z-index: 11;
    content: '';
    top: 12px;
    display: block;
    width: 40px;
    height: 4px;
    transform: rotate(10deg);
    background: #f9f9f9;
    border-radius: 8px;
    transition: all 0.8s ease-in-out;
  }
  &::before {
    right: 52px;
  }
  &::after {
    transform: rotate(-10deg);
    left: 52px;
  }

  .show-table &:before {
    transform: rotate(-10deg);
  }
  .show-table &:after {
    transform: rotate(10deg);
  }
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`;

const Row = styled.tr`
  height: 50px;
  vertical-align: middle;
  & td {
    border-top: 1px solid #111;
  }
`;

const Cell = styled.td`
  padding: 8px 16px;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: cover;
  background-position: left;
  font-weight: bold;
  background-image: ${(type) => getColor(type)};
`;

export { TableWrapper, Table, Row, Cell, ShowButton };
