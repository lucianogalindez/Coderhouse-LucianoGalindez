import Navbar from './components/Navbar/Navbar';
import './App.css'
import ItemListContainer from './containers/ItemListContainers/ItemListContainers'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import products from './products'
import { useEffect, useState } from 'react';

const createProducts = async () => {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

function App() {
  
  const [products, setProducts] = useState([])


  useEffect(() => {
    
    
    setTimeout( async () => {
      const stock = await createProducts()
      setProducts(stock)
    }, 2000);
    

  })

  return (

      <BrowserRouter>
        <Navbar/>
        <Switch>
          
          <Route exact path='/'>
            <ItemListContainer greeting='Bienvenido a Animate' products={products}/>
          </Route>

          <Route path='/producto/:id'>
            <ItemDetailContainer products={products}/>
          </Route>

        </Switch>
      </BrowserRouter>

  );
}

export default App;