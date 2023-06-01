import { useState,useEffect } from 'react'
import './App.css'

function App() {

  /**
   * * State para cambiar botón de Activar a Desactivar
   */
  const [enabled, setEnabled] = useState(false);

  /** 
   * * useEffect que ejecutaremos cada que cambie el estado de enabled 
   */

  useEffect(()=>{
    console.log('effect',{enabled})
  },[enabled])

  return (
    <>
    <h1>
       3   
    </h1>
    
    <button onClick={()=>{
      setEnabled(!enabled)
    }}>
      {enabled ? 'Activar' : 'Desactivar'}
    </button>
    </>
  )
}

export default App
