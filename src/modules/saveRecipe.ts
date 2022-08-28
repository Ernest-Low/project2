import { Recipetype, Jsontype } from "../interfaces";

//  Save object (from meals) into recipe state
const saveRecipe = (obj: Jsontype) => {
  const returnobj : Recipetype = {
    idMeal: obj.meals[0].idMeal,
    strMeal: obj.meals[0].strMeal,
    strCategory: obj.meals[0].strCategory,
    strArea: obj.meals[0].strArea,
    strInstructions: obj.meals[0].strInstructions,
    strMealThumb: obj.meals[0].strMealThumb,
    strYoutube: obj.meals[0].strYoutube,
    strIngredient1: obj.meals[0].strIngredient1,
    strIngredient2: obj.meals[0].strIngredient2,
    strIngredient3: obj.meals[0].strIngredient3,
    strIngredient4: obj.meals[0].strIngredient4,
    strIngredient5: obj.meals[0].strIngredient5,
    strIngredient6: obj.meals[0].strIngredient6,
    strIngredient7: obj.meals[0].strIngredient7,
    strIngredient8: obj.meals[0].strIngredient8,
    strIngredient9: obj.meals[0].strIngredient9,
    strIngredient10: obj.meals[0].strIngredient10,
    strIngredient11: obj.meals[0].strIngredient11,
    strIngredient12: obj.meals[0].strIngredient12,
    strIngredient13: obj.meals[0].strIngredient13,
    strIngredient14: obj.meals[0].strIngredient14,
    strIngredient15: obj.meals[0].strIngredient15,
    strIngredient16: obj.meals[0].strIngredient16,
    strIngredient17: obj.meals[0].strIngredient17,
    strIngredient18: obj.meals[0].strIngredient18,
    strIngredient19: obj.meals[0].strIngredient19,
    strIngredient20: obj.meals[0].strIngredient20,
    strMeasure1: obj.meals[0].strMeasure1,
    strMeasure2: obj.meals[0].strMeasure2,
    strMeasure3: obj.meals[0].strMeasure3,
    strMeasure4: obj.meals[0].strMeasure4,
    strMeasure5: obj.meals[0].strMeasure5,
    strMeasure6: obj.meals[0].strMeasure6,
    strMeasure7: obj.meals[0].strMeasure7,
    strMeasure8: obj.meals[0].strMeasure8,
    strMeasure9: obj.meals[0].strMeasure9,
    strMeasure10: obj.meals[0].strMeasure10,
    strMeasure11: obj.meals[0].strMeasure11,
    strMeasure12: obj.meals[0].strMeasure12,
    strMeasure13: obj.meals[0].strMeasure13,
    strMeasure14: obj.meals[0].strMeasure14,
    strMeasure15: obj.meals[0].strMeasure15,
    strMeasure16: obj.meals[0].strMeasure16,
    strMeasure17: obj.meals[0].strMeasure17,
    strMeasure18: obj.meals[0].strMeasure18,
    strMeasure19: obj.meals[0].strMeasure19,
    strMeasure20: obj.meals[0].strMeasure20,
  };
  return returnobj;
};

export default saveRecipe;
