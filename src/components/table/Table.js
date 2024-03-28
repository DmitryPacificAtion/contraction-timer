import { TableWrapper, Table as TableStyled, Row, Cell } from './Table.styled';

function Table({ list }) {
  return (
    <TableWrapper>
      <TableStyled>
        {list.map(({ id, type, name, time }) => (
          <Row key={id}>
            <Cell type={type}>{name}</Cell>
            <Cell type={type}>{time}</Cell>
          </Row>
        ))}
      </TableStyled>
    </TableWrapper>
  );
}

export { Table };
