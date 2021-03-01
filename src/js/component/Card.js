import React from "react";

export function Card(props) {
	return (
		<div className="card" style={{ width: "15rem" }}>
			<img
				className="card-img-top"
				src={props.imageURL}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a
					href="https://www.amazon.com/70e1fbd5-053b-48fd-bab0-ac13a5321d46"
					className="btn btn-primary">
					{props.label}
				</a>
			</div>
		</div>
	);
}
