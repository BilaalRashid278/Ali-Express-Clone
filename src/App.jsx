import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./Components/Home"
import SelectedItem from "./Components/SelectedItem"
import AddToCart from "./Components/AddToCart"
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/selectedItem'  element={<SelectedItem/>}/>
        <Route path='/AddToCart'  element={<AddToCart/>}/>
      </Routes>  
    </BrowserRouter>
  )
}

export default App
