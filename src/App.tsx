import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import FavoritesPage from "./components/FavoritesPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FavoriteContextProvider from "./context/FavoriteContextProvider";

function App() {
  return (
    <div className="App">
      <FavoriteContextProvider>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/favorites" element={<FavoritesPage />}></Route>
          </Routes>
        </Router>
      </FavoriteContextProvider>
      <Footer />
    </div>
  );
}

export default App;
