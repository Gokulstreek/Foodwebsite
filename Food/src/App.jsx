import {useState}from 'react'
import { Navbar } from './component/Navbar/Navbar'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route} from 'react-router-dom';
import CART from'./pages/Card/Card.jsx'
import Home from './pages/Home/Home';
import ADMIN from '../src/pages/ADMIN/ADMIN'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './component/Footer/Footer'
import LOGIN from './component/LoginPopup/LoginPopup.jsx'
import REGISTER from './component/LoginPopup/Register'
import UPDATE from './pages/UPDATE/UPDATE';
const App = () => {

  const [showLogin,setshowLogin]=useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

 return( 
    <>
 {showLogin && (
        <LOGIN
          setshowLogin={setshowLogin}
          setIsLoggedIn={setIsLoggedIn}   
        />
      )}      
      <div className='app'>
        <ToastContainer/>
        <Navbar
          setshowLogin={setshowLogin}
          isLoggedIn={isLoggedIn}        
          setIsLoggedIn={setIsLoggedIn} 
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/CART' element={<CART />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/ADMIN/*' element={<ADMIN />} />
          <Route path='/ADMIN/UPDATE' element={<UPDATE/>}/>
          <Route path='/ADMIN/UPDATE/:id' element={<UPDATE/>} loader={(params)=>fetch(`http://localhost:5014/getfood/${params.id}`)}/>
          <Route path='/LOGIN' element={<LOGIN setshowLogin={setshowLogin} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/REGISTER' element={<REGISTER setshowLogin={setshowLogin} />} />
        </Routes><b></b>
      </div>
      <Footer/>
    </>
 )
}

export default App