import { SearchByIngredientResponse } from "./types";
import searchByIngredientMockResp from "./mock/searchByIngredient.json"

 export class CocktailApiService {

    private baseUrl = "https://www.thecocktaildb.com/api/json/v1/1";

    private mockData = true;

    async searchCocktailByIngredient(q: string): Promise<SearchByIngredientResponse | null> {
        console.log("Calling API !! ")
        if (this.mockData){
            return new Promise((resolve) => resolve(searchByIngredientMockResp)) 
        }
        try {
            const response = await fetch(`${this.baseUrl}/filter.php?i=${q}`);
            if (!response.ok) {
                throw new Error('Failed to fetch cocktail');
            }

            return await response.json();
           
        } catch (error) {
            console.error('Error fetching cocktail:', error);
            return null;
        }
    }

}

export default CocktailApiService


// cocktailApi.fetchCocktailById('123')
//     .then(cocktail => {
//         if (cocktail) {
//             console.log('Fetched cocktail:', cocktail);
//         } else {
//             console.log('Cocktail not found.');
//         }
//     });

// cocktailApi.fetchRandomCocktail()
//     .then(cocktail => {
//         if (cocktail) {
//             console.log('Random cocktail:', cocktail);
//         } else {
//             console.log('Failed to fetch random cocktail.');
//         }
//     });
