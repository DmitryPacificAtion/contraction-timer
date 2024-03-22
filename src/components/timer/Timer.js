import { useEffect, useState } from 'react';
import './Timer.scss';
import { Button, Title, Clock } from './components';

const ONE_SECOND = 1000;
const DEFAULT_TIME = 0;

const msFormatter = (time) => {
  const seconds = Math.floor(time % 60);
  return `${Math.floor((time % 3600) / 60)}:${
    seconds < 10 ? '0' + seconds : seconds
  }`;
};

function Timer() {
  const [hasContractionsBegin, setHasContractionsBegin] = useState(false);
  const [timer, setTimer] = useState(DEFAULT_TIME);

  const handleClick = () =>
    setHasContractionsBegin((hasContractionsBegin) => !hasContractionsBegin);

  useEffect(() => {
    let id = null;
    setTimer(DEFAULT_TIME);
    id = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, ONE_SECOND);

    return () => {
      clearInterval(id);
      setTimer(DEFAULT_TIME);
    };
  }, [hasContractionsBegin]);

  return (
    <section className={hasContractionsBegin ? 'contractions' : 'rest'}>
      <Clock>{msFormatter(timer)}</Clock>
      <Title>{hasContractionsBegin ? 'Перейми' : 'Відпочинок'}</Title>
      <Button handleClick={handleClick}>
        {hasContractionsBegin ? 'Стоп' : 'Старт'}
      </Button>
    </section>
  );
}

export { Timer };
