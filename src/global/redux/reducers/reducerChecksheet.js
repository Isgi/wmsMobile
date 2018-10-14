
const initialState = {
  isLoading: false,
  data: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case 'CREATE_CHECKSHEET_PENDING' :
      return { ...state, isLoading: true };
    case 'CREATE_CHECKSHEET_FULFILLED' :
      return { ...state, isLoading: false };
    case 'CREATE_CHECKSHEET_REJECTED' :
      return { ...state, error: action.payload.data, isLoading: false };

    case 'UPDATE_CHECKSHEET': {
      const newResultsAfterUpdate = state.data.map((result) => {
        if (result._id === action.payload._id) {
          return action.payload;
        }
        return result;
      });
      return { ...state, data: newResultsAfterUpdate, isLoading: false };
    }

    case 'GET_CHECKSHEET_PENDING':
      return {...state, isLoading: true};
    case 'GET_CHECKSHEET_FULFILLED':
      const { data } = action.payload.data;
      return {...state, data, isLoading: false};
    case 'GET_CHECKSHEET_REJECTED':
      return {...state, error: action.payload.data, isLoading: false};

    case 'DELETE_CHECKSHEET': {
      const newResultsAfterDelete = state.data.filter(result => result._id !== action.payload);
      return { ...state, data: newResultsAfterDelete, isLoading: false };
    }

    default:
      return state;
  }
};
