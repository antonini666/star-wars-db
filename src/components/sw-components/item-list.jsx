import React from "react";

import ItemList from "../item-list";
import {
  withData,
  withSwapiService,
  withChildFunctions,
  compose,
} from "../hoc-helper";

const renderName = ({ name }) => <span>{name}</span>;
const renderModelandName = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunctions(renderName)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunctions(renderName)
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunctions(renderModelandName)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
