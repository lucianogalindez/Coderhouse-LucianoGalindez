import Navbar from './components/Navbar';
import './App.css'
import ItemListContainer from './containers/ItemListContainers/'

const array1 = [1, 3, 9]
const array = array1.map(x => x**2)

console.log(array)

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <ItemListContainer greeting='Bienvenido a Animate'/>

    </div>
  );
}

export default App;