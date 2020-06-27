import React, { useState } from "react";
import Row from "../row";
import { PlanetDetails, PlanetList } from "../sw-components";

const PlanetsPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const onItemSelected = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  return (
    <Row
      left={<PlanetList onItemSelected={onItemSelected} />}
      right={<PlanetDetails itemId={selectedItem} />}
    />
  );
};

export default PlanetsPage;
