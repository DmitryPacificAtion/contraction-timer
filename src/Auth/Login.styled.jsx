import styled from 'styled-components';
import { VALIDATIONS, getValidationColor } from './constants';

export const Container = styled.div`
  margin: 150px auto 0;
  max-width: 375px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2e2e2e;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.75);
  padding: 120px 0 60px;
`;

export const Title = styled.h1`
  font: 700 28px/28px 'Inter', sans-serif;
  color: #bfebf1;
  text-align: center;
  padding-bottom: 50px;
`;

export const Suggestions = styled.div`
  font: 400 13px/28px 'Inter', sans-serif;
  text-align: left;
  padding-bottom: 30px;
`;
export const Text = styled.p`
  font-size: 14px;
  color: ${({ validation }) => getValidationColor(validation)};
`;

export const Input = styled.input.attrs(
  ({ validation = VALIDATIONS.DEFAULT }) => ({
    validation,
  })
)`
  border: 2px solid;
  width: calc(100% - 24px);
  border-color: ${({ validation }) => getValidationColor(validation)};
  border-radius: 10px;
  padding: 10px 15px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  position: relative;
`;

export const Eye = styled.i`
  position: absolute;
  top: 0;
  right: 10px;
  line-height: 54px;
  cursor: pointer;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  // align-items: center;
  // flex-flow: column;
  padding: 0 60px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 30px;
  padding: 15px 0;
  font: 700 18px/14px 'Inter', sans-serif;
  height: 48px;
  color: #fff;
  cursor: pointer;
  background-image: linear-gradient(to right, #a07aff, #d53a9d);
`;

// Input's attrs will be appl
