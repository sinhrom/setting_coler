import React, { useState } from "react";
import "./index.js";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import { Container, Row } from "reactstrap";
import SizeSetting from "./components/SizeSetting.js";
import Result from "./components/Result";

function App() {
  const [size, setSize] = useState(12);
  const [color, setColor] = useState("red");

  function onChangeSize(value) {
    if (size + value >= 8 && size + value <= 38) setSize(size + value);
    else return;
  }

  function onSetColor(params) {
    setColor(params);
  }

  function onSettingDefault(value) {
    if (value) {
      setSize(12);
      setColor("red");
    }
  }
  return (
    <Container>
      <Row xs="6">
        <ColorPicker color={color} onReceiveColor={onSetColor} />
        <SizeSetting
          size={size}
          onChangeSize={onChangeSize}
          onSettingDefault={onSettingDefault}
        />
      </Row>
      <Result size={size} color={color} />
    </Container>
  );
}

export default App;
