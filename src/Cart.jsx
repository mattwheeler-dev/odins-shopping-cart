import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
	const { cart, removeFromCart, clearCart } = useOutletContext();
	let total = 0;

	const checkout = () => {
		alert("Your order has been submitted! (JK, fake store remember?)");
		clearCart();
	};

	if (cart.length < 1) {
		return (
			<section className="cart-container">
				<h2>Shopping Cart</h2>
				<p className="empty">Your Shopping Cart is currently empty!</p>
			</section>
		);
	}

	return (
		<section className="cart-container">
			<h2>Shopping Cart</h2>
			{cart.map((item) => {
				const { id, imgURL, price, title } = item;
				total += price;
				return (
					<article key={id} className="cart-item">
						<img src={imgURL} alt={title} />
						<p className="cart-name">{title}</p>
						<p>{`$${price}`}</p>
						<button className="remove-item" onClick={() => removeFromCart(id)}>
							<FontAwesomeIcon icon={faTrash} />
						</button>
					</article>
				);
			})}
			<p className="total">Total: {`$${total}`}</p>

			<div className="cart-btns">
				<button className="checkout" onClick={checkout}>
					Checkout
				</button>
				<button className="empty-cart" onClick={clearCart}>
					Empty Cart
				</button>
			</div>
		</section>
	);
};

export default Cart;
