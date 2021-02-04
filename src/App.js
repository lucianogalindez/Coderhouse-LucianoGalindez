import Navbar from './components/Navbar/Navbar';
import './App.css'
import ItemListContainer from './containers/ItemListContainers/ItemListContainers'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="app">
      
      <Navbar/>
      <ItemListContainer greeting='Bienvenido a Animate'/>
      <ItemDetailContainer />

    </div>
  );
}

export default App;