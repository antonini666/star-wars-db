import React, { useState } from "react";
import Row from "../row";
import { StarshipDetails, StarshipList } from "../sw-components";

const StarshipsPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const onItemSelected = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  return (
    <Row
      left={<StarshipList onItemSelected={onItemSelected} />}
      right={<StarshipDetails itemId={selectedItem} />}
    />
  );
};

export default StarshipsPage;
