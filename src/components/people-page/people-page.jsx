import React, { useState } from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-services";
import ErrorBoundry from "../error-boundry";
import Row from "../row";

const PeoplePage = () => {
  const [selectedPerson, setSelectedPerson] = useState(4);
  const swapiService = new SwapiService();

  const onPersonSelected = (id) => {
    setSelectedPerson(id);
  };

  const itemList = (
    <ItemList
      onItemSelected={onPersonSelected}
      getData={swapiService.getAllPeople}
    >
      {(i) => `${i.name} (${i.birthYear})`}
    </ItemList>
  );
  const personDetails = <PersonDetails personId={selectedPerson} />;

  return (
    <ErrorBoundry>
      <Row left={itemList} right={personDetails} />
    </ErrorBoundry>
  );
};

export default PeoplePage;
