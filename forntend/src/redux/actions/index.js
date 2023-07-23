// redux/actions/index.js

// Import the axios library to make API requests
import axios from 'axios';

// Action Types



import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from './type';

const API_URL = 'http://localhost:8000';
export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8000/api/todos'); // Assuming your backend API endpoint for fetching Todos is '/api/todos'
    const todos = response.data; // Assuming the response data contains an array of Todos
    dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: todos });
  } catch (error) {
    dispatch({ type: 'FETCH_TODOS_FAILURE', payload: error.message });
  }
};
// export const toggleTodo = (id) => (dispatch) => {
//   dispatch({ type: 'TOGGLE_TODO', payload: id });
// };

// export const updateTodo = (id, data) => (dispatch) => {
//   dispatch({ type: 'UPDATE_TODO', payload: { id, data } });
// };

// export const deleteTodo = (id) => (dispatch) => {
//   dispatch({ type: 'DELETE_TODO', payload: id });
// };

// Action Creators
// export const fetchTodosRequest = () => ({
//   type: FETCH_TODOS_REQUEST,
// });

// export const fetchTodosSuccess = (todos) => ({
//   type: FETCH_TODOS_SUCCESS,
//   payload: todos.map((todo) => ({ ...todo, key: todo._id })), // Add a unique key for each todo item
// });

// export const fetchTodosFailure = (error) => ({
//   type: FETCH_TODOS_FAILURE,
//   payload: error,
// });

// // Thunk to fetch the list of Todo items from the backend API
// export const fetchTodos = () => {
//   return async (dispatch) => {
//     dispatch(fetchTodosRequest());
//     try {
//       // Make the API request to fetch the Todo items
//       const response = await axios.get('http://localhost:8000/api/todos');

//       // Dispatch the success action with the fetched Todo items
//       dispatch(fetchTodosSuccess(response.data));
//     } catch (error) {
//       // Dispatch the failure action if the API request fails
//       dispatch(fetchTodosFailure(error.message));
//     }
//   };
// };


export const addNewTodo = (data) => {
    return async (dispatch) => {
      try {
        const response = await fetch("http://localhost:8000/api/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data }), // Use { data } instead of { data: text }
        });
  
        if (!response.ok) {
          throw new Error("Failed to add new todo.");
        }
  
        const newTodo = await response.json();
  
        // Dispatch the action to add the newTodo to the Redux store
        dispatch({ type: ADDNEW_TODO, payload: newTodo });
      } catch (error) {
        console.error("Error adding new todo:", error);
      }
    };
  };
  
  

  


// export const getAllTodos = () => {
//     return async (dispatch) => {
//       try {
//         const response = await fetch("http://localhost:8000/api/todos");
//         if (!response.ok) {
//           throw new Error("Failed to fetch todos.");
//         }
//         const todos = await response.json();
//         dispatch({ type: GETALL_TODO, payload: todos });
//       } catch (error) {
//         console.error("Error while calling getAllTodos API:", error);
//       }
//     };
//   };



export const toggleTodo = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/api/todos/${id}`);
      if (response.status === 200) {
        const toggledTodo = response.data; // Access the data directly from response.data
        dispatch({ type: TOGGLE_TODO, payload: toggledTodo });
      } else {
        throw new Error("Failed to toggle todo.");
      }
    } catch (error) {
      console.error("Error while calling toggleTodo API:", error);

    
    }
  };
};

  
  

  
export const updateTodo = (id, data) => {
  return async (dispatch) => {
    try {
      // Ensure that the data object is not null or undefined
      if (!data) {
        throw new Error("Data is missing or invalid.");
      }

      const response = await axios.put(`${API_URL}/api/todos/${id}`, { data });
      if (response.status === 200) {
        const updatedTodo = response.data;
        dispatch({ type: UPDATE_TODO, payload: updatedTodo });
      } else {
        throw new Error("Failed to update todo.");
      }
    } catch (error) {
      console.error("Error while calling updateTodo API:", error);
      // Handle error gracefully and notify the user if needed
      // You can dispatch an action to set an error state in the Redux store if necessary.
    }
  };
};
  


export const deleteTodo = (id) => {
    return async (dispatch) => {
      try {
        const response = await axios.delete(`${API_URL}/api/todos/${id}`);
        if (response.status === 200) {
          // Successful deletion, dispatch the action to remove the todo from the store
          dispatch({ type: DELETE_TODO, payload: id });
        } else {
          throw new Error("Failed to delete todo.");
        }
      } catch (error) {
        console.error("Error while calling deleteTodo API:", error);
      }
    };
  };
  
  


// export const toggleTab = (tab) => {
//     return { type: TOGGLE_TAB, selected: tab };
//   };
// export const SET_FILTER = 'SET_FILTER';
// export const setFilter = (filter) => ({
//   type: SET_FILTER,
//   payload: filter,
// });





