import Navbar from './components/Navbar/Navbar';
import './App.css'
import ItemListContainer from './containers/ItemListContainers/itemListContainers'

//Material UI
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useState } from 'react';

function App() {

  const [numItem, setNumItem] = useState(0)

  const removeItem = () => {
    if(numItem > 0) { 
      setNumItem(prev => prev - 1)
    } else {
      alert('no tiene items en el carrito')
    }
  }

  return (
    <div className="app">
      
      <Navbar numItem={numItem}/>
      <ItemListContainer greeting='Bienvenido a Animate'/>
      

      {/* Contador */}
      <div className='app__addItem'>
        <h1>Agregar Items</h1>
      </div>
      <div className='app__item'>
        <button onClick={() => setNumItem(prev => prev + 1)}><AddIcon/></button>
        <div><p>{numItem}</p></div>
        <button onClick={removeItem}><RemoveIcon/></button>
      </div>

    </div>
  );
}

export default App;