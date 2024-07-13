import { useState } from "react";
import PropTypes from 'prop-types';

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Learn React",
    description: "React is a JavaScript library for building user interfaces."
  },
  {
    id: 2,
    title: "Learn React",
    description: "React is a JavaScript library for building user interfaces."
  },
  {
    id: 3,
    title: "Learn React",
    description: "React is a JavaScript library for building user interfaces."
  }]);

  function Addtodo(){
    setTodos([...todos,{
      id: 4,
      title: Math.random(), 
      description: Math.random()
    }]);}

  return (
    <>
    <button onClick={Addtodo}>Add todos</button>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </>
  );
}




function Todo({title, description}){
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default App;