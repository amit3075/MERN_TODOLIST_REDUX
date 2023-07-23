import axios from 'axios';

export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:8000/api/auth/register', userData);

    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: 'REGISTER_FAIL',
      payload: error.response.data.message,
    });
  }
};
export const loginAction = (email, password) => async (dispatch) => {
    try {
      const res = await axios.post('http://localhost:8000/api/auth/login', { email, password });
  
      // Assuming the server returns a token upon successful login
      const authToken = res.data.token;
  
      // Store the token in Redux state or localStorage
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: authToken,
      });
  
      return true; // Return true to indicate successful login
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAIL',
        payload: error.response.data.message,
      });
  
      return false; // Return false to indicate login failure
    }
  };

  export const login = (email, password) => {
    // Some login logic, API calls, etc.
    // After successful login, return the action object
    return {
      type: 'LOGIN_SUCCESS',
      payload: { email, password },
    };
  };