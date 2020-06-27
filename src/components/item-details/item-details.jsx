import React, { useState, useEffect } from "react";

import "./item-details.css";
import ErrorIndicator from "../error-indicator";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

const ItemDetails = ({ itemId, getData, getImageUrl, children }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const onItemLoaded = (item) => {
      setItem(item);
      setLoading(false);
      setImage(getImageUrl(item));
    };

    if (!itemId) {
      return;
    }
    getData(itemId).then(onItemLoaded).catch(onError);
  }, [getData, getImageUrl, itemId]);

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const hasData = !(loading || error);

  const spinner = loading ? <div>Select a item from a list</div> : null;
  const content = hasData ? (
    <ItemDetailsView item={item} image={image} children={children} />
  ) : null;
  const errorMessage = error ? <ErrorIndicator /> : null;

  return (
    <div className="item-details card">
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const ItemDetailsView = ({ item, image, children }) => {
  return (
    <React.Fragment>
      <img src={image} alt="" className="item-image" />
      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ItemDetails;
