const initialValue = {
    user: [],
    isLoading: false,
    isError: false,
    isFinish: false,
  }

  export default (state = initialValue, action) => {
    switch (action.type) {
        case 'POSTDATA':
        return {
          ...state,
          user: action.payload
        };
  
        default:
        return state;
    }
  }