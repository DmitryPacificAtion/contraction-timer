import { TableWrapper, Table as TableStyled, Row, Cell } from './Table.styled';
import { useTimer } from '../timer-provider';
import { TYPE_ENUMS } from '../../constants';

function Table() {
  const { list } = useTimer();
  return (
    <TableWrapper>
      <TableStyled>
        <tbody>
          {list.map(({ id, type, time }) => (
            <Row key={id}>
              <Cell type={type}>
                {type === TYPE_ENUMS.REST ? 'Відпочинок' : 'Потуги'}
              </Cell>
              <Cell type={type}>{time}</Cell>
            </Row>
          ))}
        </tbody>
      </TableStyled>
    </TableWrapper>
  );
}

export { Table };
