import {useState, } from 'react';
import { Todo } from '../Model/Model';
import {GrEdit} from 'react-icons/Gr'
import { BsTrash3Fill } from 'react-icons/bs'
import { MdOutlineDone } from 'react-icons/md'
import {LiaSaveSolid} from 'react-icons/lia'
type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo: React.FC<Props> = ({ todos, setTodos, todo }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(todo.todo);


    const hanldeDone = (id: number) => {
        setTodos(todos.map(todo => todo.id === id? {...todo, isDone: !todo.isDone} :todo))
    
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleEdit = (id: number) => {
        console.log('inner edit');
        setEdit(false)
        setTodos(todos.map(todo => todo.id === id? {...todo, todo: editText } : todo))
        
    }

    
    return (
        <div >
            
            <p className='todo'>{
                edit? <input defaultValue={todo.todo} onChange={(e) => setEditText(e.target.value)} className='editInput'/> : todo.isDone ? <s>{todo.todo }</s> : <span>{ todo.todo}</span>
            } <span className='icon-container'>{edit ? <LiaSaveSolid  className="pen" onClick={ () => handleEdit(todo.id)} size={ 21} /> : <GrEdit className="pen" onClick={() => setEdit(true)} />} <BsTrash3Fill className="pen" onClick={ () => handleDelete(todo.id)} /> <MdOutlineDone onClick={() => hanldeDone(todo.id)} className="pen"/></span></p>
    </div>
    );
};

export default SingleTodo; 