import Header from './components/header'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <NavBar/>
    <Header/>
    <Footer/>
    <Card image='./me.png'
          title="Anjana Pasindu Madushan"
          description="This is the picture which I included to my CV."/>
    </>
  )
}

export default App
