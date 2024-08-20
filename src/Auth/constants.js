export const VALIDATIONS = {
  DEFAULT: 'default',
  VALID: 'valid',
  ERROR: 'error',
};

export const getValidationColor = (validation, lighter = false) => {
  if (validation === VALIDATIONS.VALID) {
    return lighter ? 'rgb(199 241 215)' : '#27B274';
  }
  if (validation === VALIDATIONS.ERROR) {
    return lighter ? 'rgb(252 221 221)' : '#FF8080';
  }
  return lighter ? 'rgb(233 253 253)' : '#bfebf1';
};
