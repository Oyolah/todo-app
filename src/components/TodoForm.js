import React, {useState, useEffect, useRef} from 'react';

const TodoForm = ({onSubmit, edit}) => {
  const [input, setInput] = useState(edit ? edit.value : '');

  // getting the focus
  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  });
  //Handle Change function
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  // Handling the submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {edit ? (
        <>
          <input
            type="text"
            name="text"
            placeholder="Update Todos"
            value={input}
            onChange={handleChange}
            ref={inputFocus}
            className="todo-input edit"
          />
          <button type="submit" className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            name="text"
            placeholder="Enter todo"
            value={input}
            onChange={handleChange}
            ref={inputFocus}
            className="todo-input"
          />
          <button type="submit" className="todo-button">
            Add Todo
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
