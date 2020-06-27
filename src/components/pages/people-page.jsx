import React, { useState } from "react";
import Row from "../row";
import { PersonDetails, PersonList } from "../sw-components";

const PeoplePage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const onItemSelected = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  return (
    <Row
      left={<PersonList onItemSelected={onItemSelected} />}
      right={<PersonDetails itemId={selectedItem} />}
    />
  );
};

export default PeoplePage;
