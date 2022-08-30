import { Recipetype, Jsontype } from "../interfaces";

//  Save object (from meals) into recipe state
const saveRecipe = (obj: Jsontype) => {
  // strIngredient1: obj.meals[0].strIngredient1
  // strMeasure1: obj.meals[0].strMeasure1

  const ingredients: string[] = [];
  const ingmeasure: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingre: any = `strIngredient${i}`;
    const stringre: keyof typeof obj.meals[0] = ingre;
    if (stringre != "idMeal") {
      const result = obj.meals[0][stringre].trim();
      if (result != "") {
        ingredients.push(result);
        const meas: any = `strMeasure${i}`;
        const strmeas: keyof typeof obj.meals[0] = meas;
        if (strmeas != "idMeal") {
          const result2 = obj.meals[0][strmeas].trim();
          ingmeasure.push(result2);
        }
      }
    }
  }

  const returnobj: Recipetype = {
    idMeal: obj.meals[0].idMeal,
    strMeal: obj.meals[0].strMeal,
    strCategory: obj.meals[0].strCategory,
    strArea: obj.meals[0].strArea,
    strInstructions: obj.meals[0].strInstructions,
    strMealThumb: obj.meals[0].strMealThumb,
    strYoutube: obj.meals[0].strYoutube,
    arringredients: ingredients,
    arrmeasure: ingmeasure,
  };
  return returnobj;
};

export default saveRecipe;
