const Home = () => {
	return (
		<section className="home-container">
			<h1>Stuff & Things</h1>
			<h3>The go-to place to find stuff... and also things!</h3>
			<p className="disclaimer">
				<em>Disclaimer :</em> None of the products on this site are real. All
				product data is used for testing / representational purposes. Enjoy!
				<br />
				<span className="socials">
					Find me on{" "}
					<a
						href="https://www.linkedin.com/in/mattwheeler-dev/"
						target="_blank"
					>
						LinkedIn
					</a>{" "}
					and{" "}
					<a href="https://github.com/mattwheeler-dev" target="_blank">
						GitHub
					</a>
				</span>
			</p>
		</section>
	);
};

export default Home;
