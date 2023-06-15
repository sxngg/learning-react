import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { useFilters } from './hooks/useFilters'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App () {
  const { filters, filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      {console.log(filters)}
      <Header />
      <Cart />
      <Products products={filteredProducts}> </Products>
      <Footer />
    </CartProvider>
  )
}

export default App
