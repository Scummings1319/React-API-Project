import { Recipe } from "../models/id-model";
import EachRecipe from "./EachRecipe";
import "../styles/RecipeList.css";
interface RecipeListProps {
  mealData: Recipe[];
  favoritable: boolean;
}

export default function RecipeList({ mealData, favoritable }: RecipeListProps) {
  return (
    <div className="recipelist">
      <div className="recipeItems">
        {mealData.map((recipe, index) => {
          return (
            <EachRecipe
              key={recipe.id}
              recipe={recipe}
              favoritable={favoritable}
            />
          );
        })}
      </div>
    </div>
  );
}
