import  { useState } from 'react';

const TodoForm = ({onAddTodo}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
		setInputValue(value);
	};

const handleFormSubmit=(event)=>{
  event.preventDefault();
onAddTodo(inputValue);
setInputValue('');
}
  return (
    <div>
      <section className="form">
              <form
                action="#"
                onSubmit={handleFormSubmit}>
                <div>
                  <input
                    type="text"
                    className="todo-input"
                    autoComplete="off"
                    value={inputValue}
                    onChange={(event) => handleInputChange(event.target.value)} //we can get the value from this
                  />
                </div>
      
                <div>
                  <button
                    type="submit"
                    className="todo-btn">
                    Add Task
                  </button>
                </div>
              </form>
            </section>
    </div>
  );
};

export default TodoForm;