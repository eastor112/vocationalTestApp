export const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const showName = (names, fatherName, motherName) => {
  if (names === '' && fatherName === '' && motherName === '') {
    return '---';
  }
  if (names !== '' && fatherName !== '' && motherName !== '') {
    return `${fatherName} ${motherName}, ${names}`;
  }
  if (names === '' && (fatherName !== '' || motherName !== '')) {
    return `${fatherName} ${motherName}`;
  }
  if (names !== '' && fatherName === '' && motherName === '') {
    return names;
  }
  return '';
};
