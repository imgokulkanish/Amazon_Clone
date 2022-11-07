import './App.css'
import { useEffect } from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Checkout from './Pages/Checkout/Checkout'
import Home from './Pages/Home/Home'
import { auth } from './firebase'
import { useStateValue } from './components/StateProvider/StateProvider'
function App() {
  const [{ basket }, dispatch] = useStateValue()
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
    return () => {
      unSubscribe()
    }
  }, [dispatch])
  return (
    <Router>
      <Routes>
        <Route exact path="/checkout" element={<Checkout />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App
