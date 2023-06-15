import { useCart } from '../hooks/useCart'
// import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
  // const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer>
      {
        JSON.stringify(cart, null, 2)
      }
    </footer>
    /**
     *
    <footer className='footer'>
      <h4> Personal Project with React ⚛️ － <span>@sxngg</span></h4>
      <h5>Shopping Cart with useContext & useReducer</h5>
    </footer>
     */
  )
}
