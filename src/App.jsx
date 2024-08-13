import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
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