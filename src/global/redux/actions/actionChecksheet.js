import axios from 'axios';

export const createChecksheet = (value) => {
  return {
    type: 'CREATE_CHECKSHEET',
    payload: axios({
      method: 'POST',
      url: 'http://156.67.218.114:5000/savecs',
      headers: {
        'Content-Type': 'application/json'
      },
      data: value
    })
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
    payload: axios({
      method: 'GET',
      url: 'http://156.67.218.114:5000/listcs',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  };
};

export const deleteChecksheet = (id) => {
  return {
    type: 'DELETE_CHECKSHEET',
    payload: id
  };
};

