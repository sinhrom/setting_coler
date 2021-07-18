import React from "react";
import { Col } from "reactstrap";
import { Card, CardHeader, CardBody } from "reactstrap";
import { Button } from "reactstrap";
// import Reset from "./Reset";
import "../css/SizeSetting.css";
import PropTypes from "prop-types";

SizeSetting.propTypes = {
  size: PropTypes.number,
  onChangeSize: PropTypes.func,
  onSettingDefault: PropTypes.func,
};

function SizeSetting(props) {
  const { size, onChangeSize, onSettingDefault } = props;
  function changeSize(value) {
    if (onChangeSize) onChangeSize(value);
  }
  function onResetDefault() {
    onSettingDefault(true);
  }
  return (
    <>
      <Col xs={6}>
        <Card>
          <CardHeader>Size : {size} px</CardHeader>
          <CardBody>
            <Button
              variant="success"
              id="increase"
              onClick={() => changeSize(2)}
            >
              Increment
            </Button>
            <Button
              variant="success"
              id="decrease"
              onClick={() => changeSize(-2)}
            >
              Decrement
            </Button>
          </CardBody>
        </Card>
        <Button variant="primary" onClick={onResetDefault} id="reset">
          Reset
        </Button>
      </Col>
    </>
  );
}

export default SizeSetting;
