export const login = (value) => {
  return {
    type: 'LOGIN',
    payload: value
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};
