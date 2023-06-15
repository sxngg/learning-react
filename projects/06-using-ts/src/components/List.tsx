import { Sub } from '../types'

interface Props {
  subs: Array <Sub>
}

const List = ({ subs }:Props) => {
  const renderList = (): JSX.Element[] => {
    return subs.map(sub => {
      return (
        <li key={sub.nick}>
          <h4> {sub.nick} </h4>
          <p> {sub.description?.substring(0, 100)} </p>
        </li>
      )
    })
  }
  return (
    <ul>
      {renderList()}
    </ul>
  )
}

export default List
