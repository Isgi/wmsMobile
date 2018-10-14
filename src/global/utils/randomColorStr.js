const hashCode = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

export default (str) => {
  const code = hashCode(str);
  const c = (code & 0x00FFFFFF)
  .toString(16)
  .toUpperCase();
  return '00000'.substring(0, 6 - c.length) + c;
};
