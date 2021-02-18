import Navbar from './components/Navbar/Navbar';
import './App.css'
import ItemListContainer from './containers/ItemListContainers/ItemListContainers'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Footer } from './components/Footer/Footer';
import { CartContainer } from './containers/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';

function App() {
  
  return (

      <CartProvider>
        
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

            <Route path='/cart'>
              <CartContainer />
            </Route>       

          </Switch>
          <Footer />
        </BrowserRouter>

      </CartProvider>
  );
}

export default App;