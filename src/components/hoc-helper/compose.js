const compose = (...func) => (comp) => {
  return func.reduceRight((prev, func) => func(prev), comp);
};

export default compose;
