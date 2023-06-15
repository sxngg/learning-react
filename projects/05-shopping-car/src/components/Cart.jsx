import { useId } from 'react'
import { CartIcon } from './Icons.jsx'
import './Cart.css'

export function Cart () {
  const cartCheckboxId = useId()

  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img
              src='https://i.dummyjson.com/data/products/29/1.jpg'
              alt='Handcraft Chinese style art'
            />
            <div>
              <strong> iPhone</strong> - $1499
            </div>

            <footer>
              <small>
                Qty: 1
              </small>
              <button>+</button>
            </footer>
          </li>
        </ul>
      </aside>
    </>
  )
}
