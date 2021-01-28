import Navbar from './components/Navbar/Navbar';
import './App.css'
import ItemListContainer from './containers/ItemListContainers/ItemListContainers'

function App() {

  return (
    <div className="app">
      
      <Navbar/>
      <ItemListContainer greeting='Bienvenido a Animate'/>

    </div>
  );
}

export default App;