import React, { useState } from "react";
import "../css/ColorPicker.css";
import { CardText, Col } from "reactstrap";
import { Card, CardHeader, CardBody } from "reactstrap";
import PropTypes from "prop-types";

ColorPicker.propTypes = {
  color: PropTypes.string,
  onReceiveColor: PropTypes.func,
};

function ColorPicker(props) {
  const [colors] = useState(["red", "blue", "green", "#ccc"]);
  const { color, onReceiveColor } = props;

  function showColor(color) {
    return {
      backgroundColor: color,
      width: "50px",
      height: "50px",
    };
  }

  function setActiveColor(color) {
    onReceiveColor(color);
  }

  let elmColors = colors.map((color1, index) => {
    return (
      <CardText
        key={index}
        style={showColor(color1)}
        className={color === color1 ? "active" : ""}
        onClick={() => setActiveColor(color1)}
      ></CardText>
    );
  });

  return (
    <>
      <Col xs={6}>
        <Card>
          <CardHeader>Color Picker</CardHeader>
          <CardBody>{elmColors}</CardBody>
        </Card>
      </Col>
    </>
  );
}

export default ColorPicker;
