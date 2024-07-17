import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<section className="error-page">
			<h2>Oops!</h2>
			<h3>Seems you{`'`}ve ended up in the wrong dimension!</h3>
			<p>
				Click <Link to="/">here</Link> to get back to the home page!
			</p>
		</section>
	);
};

export default ErrorPage;
