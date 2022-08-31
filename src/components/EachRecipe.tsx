import { useState } from "react";
import { Recipe } from "../models/id-model";
import "../styles/EachRecipe.css";
import Heart from "./Heart";

interface RecipeProps {
  recipe: Recipe;
  favoritable: boolean;
}

export default function EachRecipe({ recipe, favoritable }: RecipeProps) {
  const [showDiv, setShowDiv] = useState(false);

  return (
    <div className="grid-container-element">
      <div className="EachItem">
        <div className={showDiv ? "RecipeInfo" : "no"}>
          <button
            id="xbuttonall"
            onClick={() => setShowDiv(false)}
            className="exitButtonRecipe"
          >
            <img className="xbtnrecipe" id="xbtnid" src="xmark-solid.svg" />
          </button>
        </div>

        <div className="EachRecipe">
          <div className="insideBox">
            <div className="recipeImageContainer">
              <img className="recipeImage" src={recipe.image} alt="" />
            </div>
            <p className="recipeTitle">{recipe.title}</p>
            <button onClick={() => setShowDiv(true)} className="MoreInfoBtn">
              More Info
            </button>

            {favoritable ? <Heart recipe={recipe}></Heart> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
