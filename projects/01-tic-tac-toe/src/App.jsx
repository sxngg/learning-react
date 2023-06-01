import { useState } from 'react';
import './App.css'
import { Square } from './Square';
import {WIMNERS, TURNS} from './constns'

// Definimos los turnos posibles, que puede ser la 'x' o la 'o'

function App() {

  /**
   * * Creamos un State para manejar el tablero de juego, 
   * Este es un array con el board y updateBoard para actualizar el board
   * Esto guarda en boardFromStorage todo lo del localStorage, luego
   * si hay algo allí retornamos el objeto a inicializar el board
   * Si no, entonces significa que no había jugado entonces inicia el
   * juego con null
  */
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  });

  /** 
   * * Creamos un State para saber el turno
   * Para guardar el turno actual y poder cambiar de turno 
   * Se guarda el localStorage, si hay algo allí dentor entonces se 
   * almacena el turno, si no entonces se inicia con TURNS.X
   * ? ?? Si turnFromStorage es distinto de null o undefined se retorna
   * ? él, pero si es null o undf entonces retorna TURNS.X
   * 
   * ? || Si turnFromStorage es distinto de un valor falsy se retorna él,
   * ? si no, retornaría TURNS.X
   * */
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  });

  /**
   * * Creamos un State para saber el ganador
   */
  const [winner, setWinner] = useState(null)


  /**
   * * 1.  Verificamos si en la casilla board[index] hay algo, si hay algo
   * entonces retornamos y no hacemos nada. Si no hay nada, seguimos
   * 
   * * 2. Cambiar el turno identificando de quien es el turno y
   * luego se setea ese turno para cambiarlo
   * 
   * * 3. Actualizar el board con el turno que se jugó
   * 
   * * 4. Se guarda el último board (newBoard) y el turno en el localStorage
   * 
   * * 5. Determina el ganador 
   */
  const updateBoard = (index) => {

    //1
    if ((board[index]) || winner) return

    //2
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //3
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    knowWinner(newBoard)

    //4 En el local storage solo puedes guardar un String, por eso 
    // usamos JSON.stringify
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    //5
    const newWinner = knowWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      alert(`Ha ganado ${newWinner}`)
      resetGame()
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  /** 
   * * Determinar el ganador
   * Tengo una lista de posibles combinaciones de las posiciones que
   * un jugador debe ocupar en el board para ganar.
   * Entonces debo determinar si hay las determinadas 'x' u 'o' en 
   * esa lista de posiciones.
   */
  const knowWinner = (localBoard) => {
    for (const combo of WIMNERS) {
      const [a, b, c] = combo
      if (
        localBoard[a] &&
        localBoard[a] === localBoard[b] &&
        localBoard[a] === localBoard[c]
      ) {
        return localBoard[a]
      }
    }
    return null
  }

  
  const [background,setBackground] = useState(()=>{
    const localStorage = window.localStorage.getItem('background')
    if (localStorage) return localStorage
    return 'black'
  })
  
  const classMain = `board ${background=='black' ? 
  'black-background' : 'white-background'}`
  
  const changeBackground = () =>{
    let newColor = 1

    if (background=='black'){
      newColor = 'white'
      setBackground(newColor)
      console.log(newColor)
    }
    if (background=='white') {
      newColor = 'black'
      setBackground(newColor)
      console.log(newColor)
    }
    window.localStorage.setItem('background',newColor)
  }



  return (
    <main className={classMain}>
      <h1>Tic tac toe</h1>

      <button onClick={resetGame}> Reset </button>

      <section className='game'>
        {
          board.map((cell, index) => {
            return (
              <div className='cell' key={index}>
                <Square
                  key={index}
                  index={index}
                  /**Pasamos la prop updateBoard con la función para 
                  ejecutarla cuando queramos '{f}'
                  No podemos pasarle la ejecución de la función '{f()}' 
                  porque eso ejecutaría la función cada vez que se renderice
                  */
                  updateBoard={updateBoard}
                > {board[index]}
                </Square>
              </div>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}> {TURNS.X} </Square>
        <Square isSelected={turn === TURNS.O}> {TURNS.O} </Square>
      </section>

      <button onClick={changeBackground} > Cambiar bck</button>

    </main>
  )
}

export default App
