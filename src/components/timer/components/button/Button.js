import { Button as ButtonStyled } from './Button.styled';
import { useTimer } from '../../../timer-provider';

export function Button({ children, handleClick }) {
  const timer = useTimer();
  return (
    <ButtonStyled onClick={handleClick} type={timer}>
      {children}
    </ButtonStyled>
  );
}
