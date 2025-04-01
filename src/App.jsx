import { useState } from 'react'
import Todo from './components/todo'
import TodoForm from "./components/TodoForm"
import './App.css'
import Search from './components/Search'
import Filter from './components/Filter'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Estudar React', category: 'Estudo', completed: false },
    { id: 2, text: 'Fazer exercícios', category: 'Lazer', completed: false },
    { id: 3, text: 'Ler livros', category: 'Lazer', completed: false },
    { id: 4, text: 'Assistir vídeos', category: 'Lazer', completed: false },
    { id: 5, text: 'Praticar programação', category: 'Estudo', completed: false }
  ])

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('Asc');

  const addTodo = (text, category) => {
    const newTodo = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
    ];
    setTodos(newTodo);
  };

  const removeTodo = (id) => { 
    const newTodo = [...todos]
    const filteredTodos = newTodo.filter((todo) => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => { 
    const newTodo = [...todos]
    newTodo.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodo);
  }

  return (
    <div className='app'>
      <h1> Lista de Tarefas </h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className='todo-list'>
        
        {todos
          .filter((todo) =>
            filter === "all" ? true : filter === "completed" ? todo.isCompleted : !todo.isCompleted)
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => sort == "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          .map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
