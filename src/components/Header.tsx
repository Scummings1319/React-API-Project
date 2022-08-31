import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <img id="seedling" src="seedling-solid.svg" alt="" />
      <h1 className="title">Not Your Mothers Recipes</h1>
      <div className="navLinks">
        <Link to={"/"}>
          <img className="houseIcon" src="house-solid.svg" alt="" />
        </Link>
        <Link className="link" to={"/favorites"}>
          <span className="favButton">&hearts;</span>
        </Link>
      </div>
    </div>
  );
}
