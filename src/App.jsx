import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
	const [items, setItems] = useState([]);
	const [cart, setCart] = useState([]);
	const [itemCount, setItemCount] = useState(0);

	useEffect(() => {
		const fetchItems = async () => {
			const itemsArray = [];
			const items = await fetch("https://fakestoreapi.com/products/");
			const itemData = await items.json();
			for (let i = 0; i < itemData.length; i++) {
				const id = i;
				const img = itemData[i].image;
				const price = Math.round(itemData[i].price);
				const title = itemData[i].title;
				itemsArray.push({
					id: id,
					imgURL: img,
					price: price,
					title: title,
					inCart: false,
				});
			}
			setItems(itemsArray);
			return itemsArray;
		};
		fetchItems();
	}, []);

	const addToCart = (product) => {
		setCart((prevCart) => {
			return [...prevCart, product];
		});
		items[product.id].inCart = true;
		setItemCount(itemCount + 1);
	};

	const removeFromCart = (id) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== id));
		items[id].inCart = false;
		setItemCount(itemCount - 1);
	};

	const clearCart = () => {
		setCart([]);
		setItemCount(0);
		items.map((item) => {
			item.inCart = false;
		});
	};

	return (
		<>
			<Navbar count={itemCount} />
			<Outlet
				context={{
					items,
					cart,
					itemCount,
					addToCart,
					removeFromCart,
					clearCart,
				}}
			/>
		</>
	);
};

export default App;
