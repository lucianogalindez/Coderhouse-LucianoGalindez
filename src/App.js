import Navbar from './components/Navbar/Navbar';
import './App.css'
import ItemListContainer from './containers/ItemListContainers/ItemListContainers'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  
  return (

      <BrowserRouter>
        <Navbar/>
        <Switch>
          
          <Route exact path='/'>
            <ItemListContainer greeting='Bienvenido a Animate'/>
          </Route>

          <Route path='/producto/:id'>
            <ItemDetailContainer/>
          </Route>

          <Route exact path='/category/:category'>
            <ItemListContainer greeting/>
          </Route>          

        </Switch>
      </BrowserRouter>

  );
}

export default App;