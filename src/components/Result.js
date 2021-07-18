import React, { useState } from "react";
import { Col } from "reactstrap";
import "../css/Result.css";
import PropTypes from "prop-types";

Result.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

function Result(props) {
  const { color, size } = props;

  function setStyle(color, size) {
    return {
      color: color,
      fontSize: size,
      border: "3px solid red",
    };
  }
  return (
    <Col>
      <p>
        Color : {color} - Fontsize : {size} px
      </p>
      <div id="content" style={setStyle(color, size)}>
        Nội dung setting
      </div>
    </Col>
  );
}

export default Result;
