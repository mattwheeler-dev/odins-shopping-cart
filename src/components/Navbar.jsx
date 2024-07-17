import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ count }) => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/shop">Shop</Link>
			<Link to="/cart">
				Cart
				<FontAwesomeIcon icon={faCartShopping} />
				<div className="cart-count">{count}</div>
			</Link>
		</nav>
	);
};

export default Navbar;
