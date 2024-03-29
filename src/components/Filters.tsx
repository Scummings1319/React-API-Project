import "../styles/Filters.css";
import { useContext, useState } from "react";
import FavoriteContext from "../context/FavoriteContext";

interface Props {
  calories: number;
  setCalories: React.Dispatch<React.SetStateAction<number>>;
}

export default function Filters({ calories, setCalories }: Props) {
  const { filters, updateFilter } = useContext(FavoriteContext);

  return (
    <div className="filterSection">
      <input
        id="vegetarian"
        type="checkbox"
        checked={filters.vegetarian}
        onChange={(e) => {
          updateFilter("vegetarian");
        }}
      />
      <label htmlFor="vegetarian">Vegetarian</label>
      <input
        id="dairyfree"
        type="checkbox"
        checked={filters.dairyfree}
        onChange={(e) => {
          updateFilter("dairyfree");
        }}
      />
      <label htmlFor="dairyfree">Dairy-Free</label>
      <input
        id="glutenfree"
        type="checkbox"
        checked={filters.glutenfree}
        onChange={(e) => {
          updateFilter("glutenfree");
        }}
      />
      <label htmlFor="glutenfree">Gluten-Free</label>
      <input
        id="nutfree"
        type="checkbox"
        checked={filters.nutfree}
        onChange={(e) => {
          updateFilter("nutfree");
        }}
      />
      <label htmlFor="nutfree">Nut-Free</label>
      <input
        id="shellfishfree"
        type="checkbox"
        checked={filters.shellfishfree}
        onChange={(e) => {
          updateFilter("shellfishfree");
        }}
      />
      <label htmlFor="shellfishfree">Fish/Shellfish Free</label>
      <input
        className="calorieBar"
        onChange={(e) => setCalories(e.target.valueAsNumber)}
        id="calories"
        type="number"
      />
      <label htmlFor="calories" placeholder="Max Calories">
        Calories:{" "}
      </label>
      <button type="submit" className="submit-btn btn" id="submit-btn">
        Enter
      </button>
    </div>
  );
}
