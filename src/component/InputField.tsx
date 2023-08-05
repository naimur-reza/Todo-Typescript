import { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}>
        <input
          ref={inputRef}
          type="text"
          value={todo}
          placeholder="Enter a task"
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default InputField;
