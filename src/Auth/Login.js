import React, { useCallback, useState } from 'react';
import {
  Container,
  Button,
  Title,
  Input,
  Box,
  Label,
  I,
  Suggestions,
  Text,
} from './Login.styled';
import { VALIDATIONS } from './constants';

export function Login() {
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const togglePwdEye = useCallback(
    () => setIsPwdVisible((state) => !state),
    []
  );
  return (
    <Container>
      <Box>
        <Title>Sign up</Title>
        <Input placeholder='Enter your email' type='email' />
        <Label>
          <Input
            placeholder='Create your password'
            type={isPwdVisible ? 'text' : 'password'}
            validation={VALIDATIONS.INSERT}
            maxLength={64}
            minLength={8}
          />
          <I onClick={togglePwdEye}>
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
                  stroke-linecap='round'
                  stroke-linejoin='round'
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
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            )}
          </I>
        </Label>
        <Suggestions>
          <Text validation={VALIDATIONS.CORRECT}>
            8 characters or more (no spaces)
          </Text>
          <Text validation={VALIDATIONS.ERROR}>
            Uppercase and lowercase letters
          </Text>
          <Text validation=''>At least one digit</Text>
          <Text validation=''>
            This password doesn't look right. Please try again or reset it now. 
          </Text>
        </Suggestions>
        <Button type='submit'>Sign up</Button>
      </Box>
    </Container>
  );
}
