import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from "./contexts/ProductContext";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart({ ...cart, [item.target.value]: item.target.value})
	};

	return (
		<ProductContext.Provider value={{ products, addItem }} className="App">
			<CartContext.Provider value={[cart, setCart]}>
				<Navigation component={Navigation} />

				{/* Routes */}
				<Route
					exact
					path="/"
					component={Products}
				/>

				<Route
					path="/cart"
					component={ShoppingCart} />}
				/>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
