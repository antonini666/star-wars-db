import React, { useState } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

const App = () => {
  const [selectedPerson, setSelectedPerson] = useState(4);

  const onPersonSelected = (id) => {
    setSelectedPerson(id);
  };

  return (
    <div>
      <div className="container ">
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={selectedPerson} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
