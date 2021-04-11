
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Cart from './pages/Cart';
import Photos from './pages/Photos';
import './App.css';

function App() {
  return (
		<Switch >
			<Route path="/cart" component={Cart}/>
			<Route exact path="/" component={Photos}/>
		</Switch>
  
  );
}

export default App;
