import 'bootstrap/dist/css/bootstrap.min.css';

import Customer from './components/pages/customer'
import Footer from './layout/footer'
import Navbar from './layout/navbar'

export default function App() {

  return (
    <div className="container">
      <Navbar/>
      <Customer/>
      <Footer/>
    </div>
  )
}