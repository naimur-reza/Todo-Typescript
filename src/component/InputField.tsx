import React from 'react';

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo , setTodo , handleAdd}: Props) => {
    return (
        <div>
            <form className='input' onSubmit={handleAdd}>
                <input type="text" placeholder='Enter a task' onChange={(e) => setTodo(e.target.value)} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default InputField;