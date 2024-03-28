import { useEffect, useState } from 'react';
import { Screen } from './Timer.styled';
import { Button, Title, Clock } from './components';
import { TYPE_ENUMS } from '../../constants';
import { useTimerDispatch, timerActions } from '../timer-provider';

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
  const dispatch = useTimerDispatch();

  const handleClick = () => {
    setHasContractionsBegin((hasContractionsBegin) => !hasContractionsBegin);
    const type = hasContractionsBegin
      ? TYPE_ENUMS.CONTRACTIONS
      : TYPE_ENUMS.REST;

    dispatch({
      type: timerActions.SET,
      payload: { type },
    });

    // TimerContext.Consumer =
    //   timerType === TYPE_ENUMS.REST ? TYPE_ENUMS.CONTRACTIONS : TYPE_ENUMS.REST;
  };

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
    <Screen className={hasContractionsBegin ? 'contractions' : 'rest'}>
      <Clock>{msFormatter(timer)}</Clock>
      <Title>{hasContractionsBegin ? 'Перейми' : 'Відпочинок'}</Title>
      <Button handleClick={handleClick}>
        {hasContractionsBegin ? 'Стоп' : 'Старт'}
      </Button>
    </Screen>
  );
}

export { Timer };
