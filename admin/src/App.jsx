import Navbar from "./Components/Navbar/Navbar"
import {Routes,Route} from 'react-router-dom'
import Admin from  "./Pages/Admin/Admin"
import Login from './Pages/Login/login'
const App = () => {
  return (
    <>
    <Routes>
     <Route path='/' element={<Navbar/>}/>
     <Route path='/admin/*' element={<Admin/>}/>
     <Route path='/login' element={<Login/>}/>
    </Routes> 
    </>
  )
}

export default App
