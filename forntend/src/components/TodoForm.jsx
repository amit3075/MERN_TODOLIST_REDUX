// import { useState } from "react";

// import { useDispatch } from "react-redux";

// import { addNewTodo } from "../redux/actions";


// const TodoForm = () => {
//     const [text, setText] = useState("");

//     const dispatch = useDispatch();

//     const onFormSubmit = (e) => {
//         e.preventDefault();

//         dispatch(addNewTodo(text));

//         setText('');
//     }

//     const onInputChange = (e) => {
//         setText(e.target.value);
//     }

//     return (
//         <form className="form" onSubmit={onFormSubmit}>
//             <input  
//                 placeholder="Enter new todo..."
//                 className="input"
//                 onChange={onInputChange}
//                 value={text}
//             />
//         </form>
//     );
// };

// export default TodoForm;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions/index";

const TodoForm = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addNewTodo(text)); // Use the addNewTodo action to add the new todo
      setText("");
    };
  
    const handleChange = (e) => {
      setText(e.target.value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter new todo..."
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  };
  
  
export default TodoForm;
