import React, { useState, useEffect } from "react";

import "./person-details.css";
import SwapiService from "../../services/swapi-services";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const PersonDetails = ({ personId }) => {
  const swapiService = new SwapiService();

  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    updatePerson();
  }, [personId]);

  const onPersonLoaded = (person) => {
    setPerson(person);
    setLoading(false);
  };

  const onError = (error) => {
    setError(true);
    setLoading(false);
  };

  const updatePerson = () => {
    if (!personId) {
      return;
    }
    swapiService.getPerson(personId).then(onPersonLoaded).catch(onError);
  };

  const hasData = !(loading || error);

  const spinner = loading ? <Spinner /> : null;
  const content = hasData ? <PersonDetailsView person={person} /> : null;
  const errorMessage = error ? <ErrorIndicator /> : null;

  return (
    <div className="person-details card">
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const PersonDetailsView = ({ person }) => {
  return (
    <React.Fragment>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
        alt=""
        className="person-image"
      />
      <div className="card-body">
        <h4>{person.name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{person.gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{person.birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{person.eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default PersonDetails;
