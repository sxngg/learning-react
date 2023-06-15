import { useState } from 'react'
import { Sub } from '../types'

interface FormState {
  inputValues: Sub
}

const Form = () => {
  const [inputValues, setInputValues] = useState<FormState['inputValues']>({
    nick: '',
    subMonths: 0,
    description: ''
  })

  const handleSubmit = () => {
    return 0
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValues.nick} type='text' name='nick' />
        <input onChange={handleChange} value={inputValues.subMonths} type='number' name='subMonths' />
        <input onChange={handleChange} value={inputValues.description} type='text' name='description' />
        <button> Suscribe </button>
      </form>
    </div>
  )
}

export default Form
