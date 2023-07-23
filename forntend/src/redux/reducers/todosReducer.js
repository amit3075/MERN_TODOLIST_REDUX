// import * as actionTypes from '../actions/type';

// const initialState ={  
//   todos:[],
//   comletedTodos:[],
//   DELETE_TODO:[],
//   loading:false,
//   error:null,};
// export const todosReducers = (state =initialState, action) => {

//     switch (action.type) {
//         case actionTypes.ADDNEW_TODO:
//             return [action.payload, ...state]
//         case actionTypes.GETALL_TODO:
//             return action.payload
//         case actionTypes.TOGGLE_TODO:
//             return state.map(todo => (
//                 todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
//             ))
//         case actionTypes.UPDATE_TODO:
//             return state.map(todo => (
//                 todo && todo._id === action.payload._id ? { ...todo, data: action.payload.data } : todo
//             ))
//         case actionTypes.DELETE_TODO:
//             return state.filter(todo => todo._id !== action.payload._id);
        
//         default: 
//             return state;
//     }
// };
// import * as actionTypes from '../actions/type';
// import { FETCH_TODOS_SUCCESS } from '../actions/index';

// const initialState = {
//   todos:[],
//   comletedTodos:[],
//   DELETE_TODO:[],
//   loading:false,
//   error:null,
// };
// export const todosReducers = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_TODOS_SUCCESS:
//         return action.payload;
//     case actionTypes.ADDNEW_TODO:
//       return [action.payload, ...state];
//     case actionTypes.GETALL_TODO:
//       return action.payload;
//     case actionTypes.TOGGLE_TODO:
//       return state.map((todo) =>
//         todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
//       );
//     case actionTypes.UPDATE_TODO:
//       return state.map((todo) =>
//         todo && todo._id === action.payload._id
//           ? { ...todo, data: action.payload.data }
//           : todo
//       );
//     case actionTypes.DELETE_TODO:
//       return state.filter((todo) => todo._id !== action.payload._id);
//     default:
//       return state;
//   }
// };
// redux/reducers/todosReducer.js
// redux/reducers/todosReducer.js

// import * as actionTypes from '../actions/type';

// const initialState = {
//   todos: [],
//   completedTodos: [],
//   deletedTodos: [],
//   loading: false,
//   error: null,
// };

// const todosReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.FETCH_TODOS_SUCCESS:
//       return { ...state, todos: action.payload }; // Update todos in state with fetched data
//     case actionTypes.ADDNEW_TODO:
//       return { ...state, todos: [action.payload, ...state.todos] }; // Add new Todo to todos array
//     case actionTypes.GETALL_TODO:
//       return { ...state, todos: action.payload }; // Update todos in state with fetched data
//     case actionTypes.TOGGLE_TODO:
//       const toggledTodoId = action.payload._id;
//       const updatedTodos = state.todos.map((todo) =>
//         todo._id === toggledTodoId ? { ...todo, done: !todo.done } : todo
//       );
//       return {
//         ...state,
//         todos: updatedTodos,
//         completedTodos: updatedTodos.filter((todo) => todo.done),
//       };
//     case actionTypes.UPDATE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo._id === action.payload._id ? { ...todo, data: action.payload.data } : todo
//         ),
//       };
//     case actionTypes.DELETE_TODO:
//       const deletedTodoId = action.payload;
//       const updatedTodosAfterDelete = state.todos.filter(
//         (todo) => todo._id !== deletedTodoId
//       );
//       const deletedTodo = state.todos.find((todo) => todo._id === deletedTodoId);
//       return {
//         ...state,
//         todos: updatedTodosAfterDelete,
//         deletedTodos: [...state.deletedTodos, deletedTodo],
//       };
//     default:
//       return state;
//   }
// };

// export default todosReducer;
// import * as actionTypes from '../actions/type';
// import { FETCH_TODOS_SUCCESS } from '../actions/index';

// const initialState = {
//   todos: [],
//   completedTodos: [], // Corrected spelling from comletedTodos
//   deletedTodos: [],   // Corrected spelling from DELETE_TODO
//   loading: false,
//   error: null,
//   filter: 'all',
// };

// const todosReducer = (state = initialState, action) => { // Changed the name of the reducer to "todosReducer"
//   switch (action.type) {
//     case FETCH_TODOS_SUCCESS:
//       return action.payload;
//     case actionTypes.ADDNEW_TODO:
//       return [action.payload, ...state.todos]; // Modified to access "state.todos" array
//     case actionTypes.GETALL_TODO:
//       return action.payload;
//     case actionTypes.TOGGLE_TODO:
//       return state.todos.map((todo) => // Modified to access "state.todos" array
//         todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
//       );
//     case actionTypes.UPDATE_TODO:
//       return state.todos.map((todo) => // Modified to access "state.todos" array
//         todo && todo._id === action.payload._id
//           ? { ...todo, data: action.payload.data }
//           : todo
//       );
//       case actionTypes.DELETE_TODO:
//       const deletedTodoId = action.payload;
//       if (!state.todos) return state; 
//       const updatedTodosAfterDelete = state.todos.filter(
//         (todo) => todo._id !== deletedTodoId
//       );

//       const deletedTodo = state.todos.find((todo) => todo._id === deletedTodoId);
//       return {
//         ...state,
//         todos: updatedTodosAfterDelete,
//         deletedTodos: [...state.deletedTodos, deletedTodo],
//       };
//     case actionTypes.SET_FILTER:
//       return {
//           ...state,
//           filter: action.payload,
//         };
//       default:
//       return state;
//   }
// };

// export default todosReducer; // Export the default reducer
// redux/reducers/todosReducer.js

// import * as actionTypes from '../actions/type';

// const initialState = {
//   todos: [], // Initialize todos as an empty array
//   completedTodos: [],
//   deletedTodos: [],
//   loading: false,
//   error: null,
// };

// const todosReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.FETCH_TODOS_SUCCESS:
//       return { ...state, todos: action.payload }; // Update todos in state with fetched data
//     case actionTypes.ADDNEW_TODO:
//       return { ...state, todos: [action.payload, ...state.todos] }; // Add new Todo to todos array
//     case actionTypes.GETALL_TODO:
//       return { ...state, todos: action.payload }; // Update todos in state with fetched data
//     case actionTypes.TOGGLE_TODO:
//       const toggledTodoId = action.payload._id;
//       const updatedTodos = state.todos.map((todo) =>
//         todo._id === toggledTodoId ? { ...todo, done: !todo.done } : todo
//       );
//       return {
//         ...state,
//         todos: updatedTodos,
//         completedTodos: updatedTodos.filter((todo) => todo.done),
//       };
//     case actionTypes.UPDATE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo._id === action.payload._id ? { ...todo, data: action.payload.data } : todo
//         ),
//       };
//     case actionTypes.DELETE_TODO:
//       const deletedTodoId = action.payload;
//       const updatedTodosAfterDelete = state.todos.filter(
//         (todo) => todo._id !== deletedTodoId
//       );
//       const deletedTodo = state.todos.find((todo) => todo._id === deletedTodoId);
//       return {
//         ...state,
//         todos: updatedTodosAfterDelete,
//         deletedTodos: [...state.deletedTodos, deletedTodo],
//       };
//     default:
//       return state;
//   }
// };

// export default todosReducer;
// redux/reducers/todosReducer.js

import * as actionTypes from '../actions/type';




const initialState = {
  todos: [], // Initialize todos as an empty array
  completedTodos: [],
  deletedTodos: [],
  loading: false,
  error: null,
};


const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, todos: action.payload };
    
    case actionTypes.ADDNEW_TODO:
      console.log('ADDNEW_TODO Action:', action);
      return { ...state, todos: [action.payload, ...state.todos] }; // Add new Todo to todos array

    case actionTypes.GETALL_TODO:
      console.log('GETALL_TODO Action:', action);
      return { ...state, todos: action.payload }; // Update todos in state with fetched data

    case actionTypes.TOGGLE_TODO:
      console.log('TOGGLE_TODO Action:', action);
      const toggledTodoId = action.payload._id;
      const updatedTodos = state.todos.map((todo) =>
        todo._id === toggledTodoId ? { ...todo, done: !todo.done } : todo
      );
      return {
        ...state,
        todos: updatedTodos,
        completedTodos: updatedTodos.filter((todo) => todo.done),
      };

    case actionTypes.UPDATE_TODO:
      console.log('UPDATE_TODO Action:', action);
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id ? { ...todo, data: action.payload.data } : todo
        ),
      };

    case actionTypes.DELETE_TODO:
      console.log('DELETE_TODO Action:', action);
      const deletedTodoId = action.payload;
      const updatedTodosAfterDelete = state.todos.filter(
        (todo) => todo._id !== deletedTodoId
      );
      const deletedTodo = state.todos.find((todo) => todo._id === deletedTodoId);
      return {
        ...state,
        todos: updatedTodosAfterDelete,
        deletedTodos: [...state.deletedTodos, deletedTodo],
      };

    default:
      return state;
  }
};

export default todosReducer;
