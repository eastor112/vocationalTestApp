export const resumeDescription = (description, lenght) => {
  if (description.length > lenght) {
    return `${description.substring(0, lenght)}...`;
  }
  return description;
};
