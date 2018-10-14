
const initialState = {
  isLoading: false,
  data: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case 'GET_DR_PENDING':
      return { ...state, isLoading: true };
    case 'GET_DR_FULFILLED':
      const { data } = action.payload.data
      return { ...state, data, isLoading: false };
    case 'GET_DR_REJECTED':
      return { ...state, error: action.payload.data, isLoading: false };

    default:
      return state;
  }
};
