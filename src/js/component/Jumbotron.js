import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Hello, world!</h1>
			<p className="lead">
				<p>
					{" "}
					Looking for casual t-shirts that are made of superior
					quality to last for a long time?
				</p>
				<p> Need something comfortable to be used every day?</p>
			</p>
			<h2 className="my-4">
				<p>Our Cotton T-Shirts for men are perfect for the purpose.</p>
				<p className="lead1">
					<a
						className="btn btn-primary btn"
						href="https://www.amazon.com/dp/B086MCWP5T/ref=twister_B086YYG7KN"
						role="button">
						Buy Now!
					</a>
				</p>
			</h2>
		</div>
	);
}
