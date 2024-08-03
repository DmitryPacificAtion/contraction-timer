export const VALIDATIONS = {
  DEFAULT: 'default',
  CORRECT: 'correct',
  ERROR: 'error',
};

export const getValidationColor = (validation) => {
  if (validation === VALIDATIONS.CORRECT) {
    return '#27B274';
  }
  if (validation === VALIDATIONS.ERROR) {
    return '#FF8080';
  }
  return '#bfebf1';
};
