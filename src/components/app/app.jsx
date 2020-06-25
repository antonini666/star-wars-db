import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";

import PeoplePage from "../people-page";

const App = () => {
  return (
    <div>
      <div className="container ">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    </div>
  );
};

export default App;
