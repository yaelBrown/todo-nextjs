import TodoList from '../../interfaces/TodoList'

interface ITodoListItemProps {
  id: number;
  todoList: TodoList;
}

const TodoListItem = (props: ITodoListItemProps) => (
  <div>
    <span>ID: {props.id ? props.id : "n/a"}</span>
    <span>Name: {props.todoList.name ? props.todoList.name : "n/a"}</span>
  </div>
)

export default TodoListItem