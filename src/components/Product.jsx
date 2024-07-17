import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

const Product = ({ id, imgURL, name, price }) => {
	const { items, addToCart } = useOutletContext();
	const [isAdded, setIsAdded] = useState(false);

	useEffect(() => {
		if (items[id].inCart == true) {
			setIsAdded(true);
		}
	}, [items, id]);

	const addItem = () => {
		if (isAdded) {
			return;
		}
		setIsAdded(true);
		const itemToAdd = items.find((prod) => prod.id === id);
		console.log(itemToAdd);
		addToCart(itemToAdd);
	};

	return (
		<article className="product">
			<img src={imgURL} alt={`image of ${name}`} />
			<p className="name">{name}</p>
			<p className="price">${price}</p>
			<button className="add-item" onClick={addItem}>
				{!isAdded ? `Add To Cart` : "In Cart"}
			</button>
		</article>
	);
};

export default Product;
