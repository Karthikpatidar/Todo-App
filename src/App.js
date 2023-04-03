import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Todolist from './Components/Todolist';
import About from './Components/About';
import Footer from './Components/Footer';
import {Route,Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Todolist/>
      <About/>
      <Footer/>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/TodoApp' element={<Todolist/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Footer' element={<Footer/>}/>
      </Routes> */}

    </div>
  );
}

export default App;
