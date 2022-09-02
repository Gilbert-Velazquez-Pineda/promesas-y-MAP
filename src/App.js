import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './componentes/navbar/NavBar'
import Inicio from './componentes/paginas/Inicio'
import Prueba from './componentes/paginas/Prueba'
import Test from './componentes/paginas/Test'
import ItemListContainer from './componentes/navbar/ItemListContainer'
import { useState } from 'react';



function App() {

  const [counter, setCounter] = useState (0)

  const handleClick = () => {
    console.log('hiciste click');
    setCounter(counter + 1) 
  }


  return (
    <div className="App">
      <Router>
          <NavBar/>

          <div className='my-2'>
          <strong>Contador: {counter}</strong>
          </div>

          <button onClick={handleClick} className='btn btn-primary my-4'>Click</button>

          <ItemListContainer/>
          <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            <Route  path="/Prueba" element={<Prueba/>}/>
            <Route  path='/Test' element={<Test/>}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
