import { useOutletContext } from "react-router-dom";
import Product from "./components/Product";

const Shop = () => {
	const { items } = useOutletContext();
	const itemCards = items.map((item) => (
		<Product
			id={item.id}
			imgURL={item.imgURL}
			name={item.title}
			price={item.price}
			key={item.id}
		/>
	));

	return (
		<section className="shop-container">
			<h2>Our Products</h2>
			{itemCards}
		</section>
	);
};

export default Shop;
