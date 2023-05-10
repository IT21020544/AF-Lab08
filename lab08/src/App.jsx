import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from './components/Banner';

function App() {

  return (
    <>

    <BrowserRouter>
    <NavBar/>
    <Routes>
    
    <Route path="/card" element={<Card image='./me.png'
          title="Anjana Pasindu Madushan"
          description="This is the picture which I included to my CV."/>}/>

    <Route path="/" element={<Banner msg="JUST PRACTICING SOME REACT ACTIONS"/>} />
    
    </Routes>

    
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
