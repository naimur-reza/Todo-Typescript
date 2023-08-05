import React from 'react';
import { Todo } from '../Model/Model';
import {GrEdit} from 'react-icons/Gr'
import { BsTrash3Fill } from 'react-icons/bs'
import {MdOutlineDone} from 'react-icons/md'
type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo: React.FC<Props> = ({ todos, setTodos, todo }) => {
    const hanldeDone = (id: number) => {
        setTodos(todos.map(todo => todo.id === id? {...todo, isDone: !todo.isDone} :todo))
    
    }
    return (
        <div >
            
            <p className='todo'>{
                todo.isDone ? <s>{todo.todo }</s> : <span>{ todo.todo}</span>
        } <span  className='icon-container'><GrEdit className="pen" /> <BsTrash3Fill className="pen"/> <MdOutlineDone onClick={() => hanldeDone(todo.id)} className="pen"/></span></p>
    </div>
    );
};

export default SingleTodo; 