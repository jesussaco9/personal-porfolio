
const validateMail = (mail: string) => {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mail.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

export {
  validateMail
}