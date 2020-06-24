import React, { useState, useEffect } from "react";

import SwapiService from "../../services/swapi-services";

import "./item-list.css";
import Spinner from "../spinner";

const ItemList = ({ onItemSelected }) => {
  const swapiService = new SwapiService();

  const [peopleList, setPeople] = useState(null);

  useEffect(() => {
    swapiService.getAllPeople().then((peopleList) => {
      setPeople(peopleList);
    });
  }, []);

  const renderItems = (arr) => {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  };

  if (!peopleList) {
    return <Spinner />;
  }

  const items = renderItems(peopleList);

  return <div className="item-list list-group">{items}</div>;
};

export default ItemList;
