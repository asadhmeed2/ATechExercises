import { useState } from "react";
import "./App.css";
import { Hudini } from "./components/Hudini";
import { Landing } from "./components/Landing";
import { Home } from "./components/Home";

const data = {
  user: "Robyn",
  store: [
    { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
    { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
    {
      item: "Surround Sound Pelican",
      price: 3099,
      discount: 0.05,
      hottest: true,
    },
  ],
  shouldDiscount: true,
  currentPage: "Landing",
};

const CURRENT_PAGE = {
  LANDING: "landing",
  HOME: "home",
};

function App() {
  const [state, setState] = useState(data);
  const [nextPage, setNextPage] = useState(CURRENT_PAGE.LANDING);
  const [currentPage, setCurrentPage] = useState(CURRENT_PAGE.HOME);

  const switchPage = () => {
    if (nextPage === CURRENT_PAGE.HOME) {
      setNextPage(CURRENT_PAGE.LANDING);
      setCurrentPage(CURRENT_PAGE.HOME);
    } else {
      setNextPage(CURRENT_PAGE.HOME);
      setCurrentPage(CURRENT_PAGE.LANDING);
    }
  };

  return (
    <div className="App">
      {/* <Hudini /> */}

      {currentPage === CURRENT_PAGE.LANDING && (
        <Landing user={state.user} store={state.store} />
      )}
      {currentPage === CURRENT_PAGE.HOME && (
        <Home store={state.store} shouldDiscount={state.shouldDiscount} />
      )}

      <button onClick={switchPage}>got to {nextPage}</button>
    </div>
  );
}

export default App;
