import {
  TableWrapper,
  Table as TableStyled,
  Row,
  Cell,
  ShowButton,
} from './Table.styled';
import { useTimer } from '../timer-provider';
import { TYPE_ENUMS } from '../../constants';
import { msFormatter } from '../../utils';
import { useState } from 'react';

function Table() {
  const [isTableVisible, setIsTableVisible] = useState(false);
  const { list } = useTimer();
  const handleShowTable = () => setIsTableVisible((isVisible) => !isVisible);

  return (
    <TableWrapper className={isTableVisible ? 'show-table' : ''}>
      <ShowButton onClick={handleShowTable} />
      <TableStyled>
        <tbody>
          {list.map(({ id, type, time }) => (
            <Row key={id}>
              <Cell type={type}>
                {type === TYPE_ENUMS.REST ? 'Відпочинок' : 'Потуги'}
              </Cell>
              <Cell type={type}>{msFormatter(time)}</Cell>
            </Row>
          ))}
        </tbody>
      </TableStyled>
    </TableWrapper>
  );
}

export { Table };
