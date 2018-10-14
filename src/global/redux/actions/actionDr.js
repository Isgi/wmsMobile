import axios from 'axios';

export const getDr = () => {
  return {
    type: 'GET_DR',
    payload: axios({
      method: 'GET',
      url: 'http://156.67.218.114:5000/listdr',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  };
};