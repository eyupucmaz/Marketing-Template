import React from "react";
import { InfoSection } from "../../components";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

function Products() {
	return (
		<>
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
		</>
	);
}

export default Products;
