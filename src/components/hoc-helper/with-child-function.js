import React from "react";

const withChildFunctions = (fn) => (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props}>{fn}</WrappedComponent>;
  };
};

export default withChildFunctions;
