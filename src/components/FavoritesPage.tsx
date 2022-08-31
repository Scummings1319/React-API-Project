import { useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";
import RecipeList from "./RecipeList";
export default function FavoritesPage() {
  const { favoriteArray } = useContext(FavoriteContext);

  return (
    <div>
      <h1 className="pageTitles">Favorites</h1>
      <RecipeList mealData={favoriteArray} favoritable={false}></RecipeList>
      <button>
        <img src="trash-can-solid.svg" alt="" />
      </button>
    </div>
  );
}
