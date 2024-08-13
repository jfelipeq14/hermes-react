import Role from "./components/pages/role";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './layout/footer'
import Navbar from './layout/navbar'
import Customers from './components/pages/Customers'

export default function App() {
  return (
    <div className="container">

      <Navbar/>
      <Customers/>
      <Role/>
      <Footer/>
    </div>
  )
}