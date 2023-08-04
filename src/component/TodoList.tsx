import React from 'react';
import { Todo } from '../Model/Model';
import SingleTodo from './SingleTodo';


interface Props {

    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<Props> = ({todos, setTodos}) => {
    return (
        <div>
            {
                todos.map(todo => <li>{ todo.todo}</li>)
            }
        </div>
    );
};

export default TodoList;