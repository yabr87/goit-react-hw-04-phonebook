export const checkNameInPhonebook = (userName, contacts) => {
  if (contacts.some(({ name }) => name.toLowerCase() === userName)) {
    alert(`${userName} is already in contacts!`);
    return true;
  }
};

export const formatUserTel = userTel => {
  const tel = userTel.split('');
  // tel.splice(0, '', '+380 (');
  tel.splice(3, '', '-');
  tel.splice(6, '', '-');
  tel.splice(9, '', '-');
  return tel.join('');
};
