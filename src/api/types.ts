export interface BasicDrink {
    strDrink: string,
    strDrinkThumb: string,
    idDrink: string
}

export interface SearchByIngredientResponse{
    drinks: BasicDrink[]
}

