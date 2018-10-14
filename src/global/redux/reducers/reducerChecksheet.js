
const initialState = {
  isLoading: false,
  data: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case 'CREATE_CHECKSHEET' :
      state.data.push(action.payload);
      return { ...state, isLoading: false };

    case 'UPDATE_CHECKSHEET': {
      const newResultsAfterUpdate = state.data.map((result) => {
        if (result._id === action.payload._id) {
          return action.payload;
        }
        return result;
      });
      return { ...state, data: newResultsAfterUpdate, isLoading: false };
    }

    case 'GET_CHECKSHEET':
      return state;

    case 'DELETE_CHECKSHEET': {
      const newResultsAfterDelete = state.data.filter(result => result._id !== action.payload);
      return { ...state, data: newResultsAfterDelete, isLoading: false };
    }

    default:
      return state;
  }
};
