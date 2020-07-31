import React from "react";
import PropTypes from "prop-types";

const Zamboni = (props) => {
  return <div>test 123</div>;
};

Zamboni.propTypes = {
  foo: PropTypes.string,
};

Zamboni.defaultProps = {
  foo: "bar",
};

export default Zamboni;
