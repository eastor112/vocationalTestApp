export const toLocalTime = (dateUTC) => {
  const date = new Date(dateUTC);
  const localTime = date.toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return localTime;
};
