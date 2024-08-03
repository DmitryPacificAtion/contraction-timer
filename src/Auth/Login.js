import React, { useCallback, useState } from 'react';
import {
  Container,
  Button,
  Title,
  Input,
  Box,
  Label,
  Eye,
  Suggestions,
  Text,
} from './Login.styled';
import { VALIDATIONS } from './constants';

const FIELD_TYPES = {
  EMAIL: 'email',
  PASSWORD: 'password',
};
export function Login() {
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [validation, setValid] = useState({
    eightNoSpace: VALIDATIONS.DEFAULT,
    upperLowerLetters: VALIDATIONS.DEFAULT,
    oneDigit: VALIDATIONS.DEFAULT,
    specialSymbols: VALIDATIONS.DEFAULT,
  });

  const togglePwdEye = useCallback(
    () => setIsPwdVisible((state) => !state),
    []
  );
  const handleChangeField = ({ target }) => {
    if (target.name === FIELD_TYPES.EMAIL) {
      const res = /[a-zA-Z_.-]+@[a-zA-Z_]+?\.[a-zA-Z_]{2,}/g.test(target.value);
    }
    if (target.name === FIELD_TYPES.PASSWORD) {
      // const pwd =
      //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d\S@$!%*?&]{8,}$/.test(
      //     target.value
      //   );
      const eightNoSpace = /^\S{8,}$/.test(target.value);
      const upperLowerLetters = /^(?=.*[A-Z])(?=.*[a-z]).+$/.test(target.value);
      const oneDigit = /^(?=.*\d).+$/.test(target.value);
      const specialSymbols = /^(?=.*[@$!%*?&]).+$/.test(target.value);

      // Check: https://www.figma.com/design/sD1rsXjJkMWMh32I63l1d7/Clario-Test-Task
      setValid({
        eightNoSpace: eightNoSpace ? VALIDATIONS.CORRECT : VALIDATIONS.DEFAULT,
        upperLowerLetters: upperLowerLetters
          ? VALIDATIONS.CORRECT
          : VALIDATIONS.DEFAULT,
        oneDigit: oneDigit ? VALIDATIONS.CORRECT : VALIDATIONS.DEFAULT,
        specialSymbols: specialSymbols
          ? VALIDATIONS.CORRECT
          : VALIDATIONS.DEFAULT,
      });
    }
  };
  return (
    <Container>
      <Box>
        <Title>Sign up</Title>
        <Input
          placeholder='Enter your email'
          name={FIELD_TYPES.EMAIL}
          type='email'
          onBlur={handleChangeField}
        />
        <Label>
          <Input
            placeholder='Create your password'
            type={isPwdVisible ? 'text' : 'password'}
            validation={VALIDATIONS.DEFAULT}
            onChange={handleChangeField}
            maxLength={64}
            minLength={8}
            name={FIELD_TYPES.PASSWORD}
          />
          <Eye onClick={togglePwdEye}>
            {isPwdVisible ? (
              <svg
                className='pwd-icon'
                width='20px'
                height='20px'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4 12C4 12 5.6 7 12 7M12 7C18.4 7 20 12 20 12M12 7V4M18 5L16 7.5M6 5L8 7.5M15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13Z'
                  stroke='#464455'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            ) : (
              <svg
                className='pwd-icon'
                width='20px'
                height='20px'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4 10C4 10 5.6 15 12 15M12 15C18.4 15 20 10 20 10M12 15V18M18 17L16 14.5M6 17L8 14.5'
                  stroke='#464455'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            )}
          </Eye>
        </Label>
        <Suggestions>
          <Text validation={validation.eightNoSpace}>
            Has at least 8 characters or more (no spaces)
          </Text>
          <Text validation={validation.upperLowerLetters}>
            Uppercase and lowercase letters
          </Text>
          <Text validation={validation.oneDigit}>At least one digit</Text>
          <Text validation={validation.specialSymbols}>
            Has special symbols (@$!%*?&)
          </Text>
        </Suggestions>
        <Button type='submit'>Sign up</Button>
      </Box>
    </Container>
  );
}
