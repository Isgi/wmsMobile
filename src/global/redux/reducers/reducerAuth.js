
const initialState = {
  isLoading: false,
  data: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case 'LOGIN':
      return { ...state, data: action.payload };

    default:
      return state;
  }
};
