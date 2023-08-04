
import React, {useState} from 'react'
import './App.css'
import InputField from './Component/InputField';
import { Todo } from './Model/Model';
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('');
    }
  }


  console.log(todos)
  return (
    <div>
      <p className='title'>Task Manager</p>
      <InputField todo={ todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;