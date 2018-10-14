export const createChecksheet = (value) => {
  return {
    type: 'CREATE_CHECKSHEET',
    payload: value
  };
};

export const updateChecksheet = (value) => {
  return {
    type: 'UPDATE_CHECKSHEET',
    payload: value
  };
};

export const getChecksheet = () => {
  return {
    type: 'GET_CHECKSHEET',
    payload: null
  };
};

export const deleteChecksheet = (id) => {
  return {
    type: 'DELETE_CHECKSHEET',
    payload: id
  };
};

