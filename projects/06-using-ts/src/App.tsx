import { useState } from 'react'
import './App.css'
import List from './components/List'
import Form from './components/Form'
import { Sub } from './types'

interface AppState {
  subs: Array<Sub>
}

function App () {
  const [subs, setSubs] = useState<AppState['subs']>([
    {
      nick: 'dapelu',
      subMonths: 3,
      description: 'Dapelu makes kehsniw mask lent'
    },
    {
      nick: 'shensi',
      subMonths: 4
    }
  ])

  return (
    <div>
      <h1> Hola </h1>
      <List subs={subs} />
      <Form />
    </div>
  )
}

export default App
