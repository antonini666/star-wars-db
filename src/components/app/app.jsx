import React from "react";

import Header from "../header";
import ErrorBoundry from "../error-boundry";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-services";

const swapiService = new SwapiService();

const App = () => {
  return (
    <ErrorBoundry>
      <SwapiServiceProvider value={swapiService}>
        <div className="container">
          <Header />
          <RandomPlanet />
          <PeoplePage />
          <PlanetsPage />
          <StarshipsPage />
        </div>
      </SwapiServiceProvider>
    </ErrorBoundry>
  );
};

export default App;
