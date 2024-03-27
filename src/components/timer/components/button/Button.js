import './Button.scss';

function Button({ children, handleClick }) {
  return <button onClick={handleClick}>{children}</button>;
}

export { Button };
