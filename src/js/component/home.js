import React from "react";
import { Navbar } from "./Navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";

//create your first component
export function Home() {
	return (
		<>
			<Navbar> </Navbar>

			<div className="container">
				<Jumbotron> </Jumbotron>

				<div className="row">
					<Card
						title="Titulo1"
						imageUrl="https://www.amazon.com/70e1fbd5-053b-48fd-bab0-ac13a5321d46"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis metus non diam venenatis interdum a sed neque"
						label="Go somewhere1"
					/>
					<Card
						title="Titulo2"
						imageUrl="https://via.placeholder.com/150"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis metus non diam venenatis interdum a sed neque"
						label="Go somewhere2"
					/>
					<Card
						title="Titulo3"
						imageUrl="https://via.placeholder.com/150"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis metus non diam venenatis interdum a sed neque"
						label="Go somewhere3"
					/>
					<Card
						title="Titulo4"
						imageUrl="https://via.placeholder.com/150"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis metus non diam venenatis interdum a sed neque"
						label="Go somewhere4"
					/>
				</div>
			</div>
		</>
	);
}
