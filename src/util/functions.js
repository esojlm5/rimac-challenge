export const phoneValidation = (phone) => {
  const regex = /^(9[0-9]{8})$/;
  return regex.test(phone);
};

export const documentValidation = (document, type = 2) => {
  const dniRegex = /^([0-9]{8})$/;
  const ceRegex = /^([0-9]{12})$/;
  if (type === 2) {
    return dniRegex.test(document);
  } else if (type === 4) {
    return ceRegex.test(document);
  }
};

export const getAge = (date) => {
  const aux = date.split("-");
  const formatDate = [aux[1], aux[0], aux[2]].join("-");
  const today = new Date();
  const birthdate = new Date(formatDate);
  let age = today.getFullYear() - birthdate.getFullYear();
  const m = today.getMonth() - birthdate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  return age;
};

