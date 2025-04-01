import {useState} from 'react'

const TodoForm = ({addTodo}) => {

    const [value, setvalue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addTodo(value, category);
        setvalue('');
        setCategory(''); 
    }
  return (
    <div className='todo-form'>
          <h2>Criar Tarefa</h2>
          <form onSubmit={handleSubmit}>
              <input type="text" placeholder='Digite o Titulo' value={value} onChange={(e) => setvalue(e.target.value)} />
              
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Selecione uma Categoria</option>
                  <option value="Trabalho">Trabalho</option>
                  <option value="Lazer">Lazer</option>
                  <option value="Pessoal">Pessoal</option>
                  <option value="Estudos">Estudos</option>
              </select>
              <button type='submit'>Criar Tarefa</button>
          </form>
    </div>
  )
}

export default TodoForm
