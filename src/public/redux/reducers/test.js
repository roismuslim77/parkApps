const initialValue = {
    data: [],
    result:{},
    isLoading: false,
    isError: false,
    isFinish: false,
    
  }
  
  export default (state = initialValue, action) => {
    switch (action.type) {
      case 'GET_TEST_PENDING':
        return {
          ...state,
          isLoading: true
        }
  
      case 'GET_TEST_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFinish: true,
          data: action.payload.data
        };
  
      case 'GET_TEST_REJECTED':
        return {
          ...state,
          isLoading: false,
          isError: true,
          data: 'Error Network'
        };

      case 'SHOW_TEST':
        return {
          ...state,
          result: action.payload
        };
      
      case 'ADD_TEST':
        return {
          ...state,
          result: state.data.push(action.payload)
        };

      case 'EDIT_TEST':
        return {
          data: state.data.map(item => (item.id == action.payload.id) ? action.payload :item )
        };

      case 'DELETE_TEST':
        return {
          ...state,
          data: state.data.filter(item => item.id !== action.payload)
        };
  
        default:
        return state;
    }
  }
  