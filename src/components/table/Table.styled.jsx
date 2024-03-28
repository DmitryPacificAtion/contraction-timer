import styled from 'styled-components';
import { getColor } from '../../utils';

const TableWrapper = styled.div`
  height: 400px;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`;

const Row = styled.tr`
  &:not(:first-child) td {
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

export { TableWrapper, Table, Row, Cell };
