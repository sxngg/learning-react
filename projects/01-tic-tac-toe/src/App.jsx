import { useState } from 'react'
import './App.css'

function App() {

  //Creamos un useState para manejar el tablero de juego, este va a ser un array de 9 elementos (todos null)
  const board = useState(Array(9).fill(null));
  
  return (
    
    
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_,index)=>{
            return (
              <div className='cell' key={index}>
                <span className='cell_content'>
                  {index}
                </span>
              </div>
            )
          })
        }
      </section>
    </main>
  ) 
}

export default App
