import { Button, TextField, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import CocktailApiService from "../../../src/api/CocktailApiService";
import { BasicDrink, SearchByIngredientResponse } from "../../api/types";
import { getRandomElementsFromArray } from "../../utils/drinkListUtils";
import "./Homepage.css";

const numDrinks: number = 5;
export const Homepage = () => {
	const [ingredient, setIngredient] = useState("");
	const [cocktails, setCocktails] = useState<BasicDrink[] | null>();
	const api = new CocktailApiService();
	const [randomDrinks, setRandomDrinks] = useState<BasicDrink[]>();


	
	const handleIngredientChange = (event: any) => {
		setIngredient(event.target.value)
	}
	const handleSubmit = () => {
		console.log("I CALLED SUBMIT ! ")
		api.searchCocktailByIngredient(ingredient).then((resp) => {
			console.log("Response == ", resp)
			if (resp?.drinks) {
				setCocktails(resp?.drinks);
				setRandomDrinks(getRandomElementsFromArray(resp?.drinks, numDrinks));
			} else {
				setCocktails(null);
			}
			setCocktails(resp?.drinks)
		}).catch((error) => { console.log(error) });
		
	}


	return (
		<div id="homepage_container">
			<Typography variant="h2">Drink Generator</Typography>
			<div id = "textF">
			<TextField label="Ingredient" onChange={handleIngredientChange} />
			</div>
			<Button onClick={handleSubmit}>
				Submit
			</Button>
			<div className="DrinkList">
				{randomDrinks?.map((cocktail) => (
					<div key={cocktail.idDrink} className="DrinkItem">
						{cocktail.strDrink}
					</div>
				))}
			</div>
		</div>
	);


}

export default Homepage;