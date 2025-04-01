import React from 'react'

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className='filter'>
          <h2>Filtrar:</h2>
          <div className='filter-options'>
              <div>
                  <p>status</p>
                  <select value ={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">Todos</option>
                        <option value="completed">Completos</option>
                        <option value="incompleted">Incompletos</option>  
                  </select>
              </div>
              <div>
                  <p>Ordem alfabetica</p>
                  <button onClick={() => setSort("Asc")}>Asc</button>
                  <button onClick={() => setSort("Desc")}>Desc</button>
              </div>
          </div>
    </div>
  )
}

export default Filter
