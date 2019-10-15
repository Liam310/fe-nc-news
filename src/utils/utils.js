export const capitaliseFirstLetter = str => {
  if (str === '') return '';
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export const formatDate = date => {
  if (date === '') return '';
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZoneName: 'long'
  };
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString('en-GB', options);
};
