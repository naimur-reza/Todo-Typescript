
import {useState} from 'react'
import './App.css'
import InputField from './component/InputField';
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  console.log(todo)
  return (
    <div>
      <p className='title'>Task Manager</p>
      <InputField todo={ todo} setTodo={setTodo} />
    </div>
  );
};

export default App;