import TodoListItem from "../components/todolist/TodoListItem"
import TodoList from "../interfaces/TodoList"

const renderAvailableLists = (d) => {
  if (d.length === 0) return "no lists available" 

  const out: any[] = []

  d.lists.map((e: TodoList, i: number) => {
    out.push(<TodoListItem id={i} todoList={e}/>)
  })

  return out
}

export {
  renderAvailableLists
} 