import React from "react";
import PropTypes from "prop-types";

import "./item-list.css";

const ItemList = ({ data, children: renderLabel, onItemSelected }) => {
  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <div className="item-list list-group">{items}</div>;
};

ItemList.defaultProps = {
  onItemSelected: () => {},
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired,
};

export default ItemList;
