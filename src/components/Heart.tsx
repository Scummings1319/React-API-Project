import { useContext, useState } from "react";
import "./Heart.css";
import { Recipe } from "../models/id-model";
import FavoriteContext from "../context/FavoriteContext";

interface RecipeProps {
  recipe: Recipe;
}

export default function Heart({recipe} : RecipeProps) {
  const [selected, setSelected] = useState(false);
  const {favoriteArray, addFavorite, removeFavorite}=useContext(FavoriteContext)
  
  return (
    <div className="wrapper">
      <button
        className="heart"
        style={{ backgroundColor: selected ? "red" : "gray" }}
        onClick={() => {
          addFavorite(recipe)
          setSelected(true);
          console.log(favoriteArray)
        }}
      >
        <div
          className="left"
          style={{ backgroundColor: selected ? "red" : "gray" }}
        ></div>
        <div
          className="right"
          style={{ backgroundColor: selected ? "red" : "gray" }}
        ></div>
      </button>
    </div>
  );
}