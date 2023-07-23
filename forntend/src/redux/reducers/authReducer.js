 
const initialState = {
    token: null,
    message: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_SUCCESS':
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          token: action.payload.token,
          message: action.payload.message,
          error: null,
        };
      case 'REGISTER_FAIL':
      case 'LOGIN_FAIL':
        return {
          ...state,
          token: null,
          message: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  