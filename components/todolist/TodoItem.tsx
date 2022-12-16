import Todo from '../../interfaces/Todo'

interface ITodoListProps {
  todo: Todo;
}

const TodoItem = (props: ITodoListProps) => (
  <div>
    <span>ID: {props.todo.id ? props.todo.id : "n/a"}</span>
    <span>Todo: {props.todo.todo ? props.todo.todo : "n/a"}</span>
  </div>
)

export default TodoItem