import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import SwapiService from "../../services/swapi-services";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./random-planet.css";

const RandomPlanet = ({ updateInterval }) => {
  const { getPlanet } = new SwapiService();

  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const onPlanetLoaded = (planet) => {
    setPlanet(planet);
    setLoading(false);
  };

  const onError = (error) => {
    setError(true);
    setLoading(false);
  };

  useEffect(() => {
    const updatePlanet = () => {
      const id = Math.floor(Math.random() * 15) + 3;
      getPlanet(id).then(onPlanetLoaded).catch(onError);
    };

    updatePlanet();

    let id = setInterval(() => {
      updatePlanet();
    }, updateInterval);

    return () => clearInterval(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasData = !(loading || error);

  const spinner = loading ? <Spinner /> : null;
  const content = hasData ? <PlanetView planet={planet} /> : null;
  const errorMessage = error ? <ErrorIndicator /> : null;

  return (
    <div className="random-planet jumbotron rounded">
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const PlanetView = ({
  planet: { id, name, population, rotationPeriod, diameter },
}) => {
  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default RandomPlanet;

RandomPlanet.defaultProps = {
  updateInterval: 10000,
};

RandomPlanet.propTypes = {
  updateInterval: PropTypes.number,
};
