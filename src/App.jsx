import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <>
      <Toaster position='bottom-right' />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>
    </>
  )
}

export default App
