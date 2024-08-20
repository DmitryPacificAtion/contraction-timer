export const msFormatter = (time) => {
  const seconds = Math.floor(time / 1000);
  const minutes = Math.floor(seconds / 60);
  const secondsToShow = seconds % 60;

  return `${minutes}:${
    secondsToShow < 10 ? '0' + secondsToShow : secondsToShow
  }`;
};
