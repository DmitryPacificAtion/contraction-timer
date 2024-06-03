import { useTimer } from '../../../timer-provider';
import { Clock as ClockStyled } from './Clock.styled.jsx';

export function Clock({ children }) {
  const timer = useTimer();

  return <ClockStyled type={timer}>{children}</ClockStyled>;
}
