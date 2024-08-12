import Footer from './layout/footer'
import Navbar from './layout/navbar'
import Customers from './components/pages/Customers'

export default function App() {

  return (
    <div className="container">
      <Navbar/>
      <Customers/>
      <Footer/>
    </div>
  )
}