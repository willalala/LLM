import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios, { formToJSON } from "axios";
import WebSocketComponent from "./socket/websocket";

import { Col, Divider, Row, Button, Layout, Menu, theme } from "antd";

axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";
const server = "http://localhost:8000";

function App() {
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState("");
  const handleChange = (key, e) => {
    console.log(key);
    console.log(e.target.value);
    setCommand(e.target.value);
  };

  const handleClick = async () => {
    console.log("click");
    let data = {
      message: command,
    };
    let res = await axios.post(`${server}/chat/`, data);
    console.log("res", res);
    setResponse(res.data);
  };

  return (
    <>
      <p>APP</p>
      <div>请输入您的指令:</div>
      <input onChange={(e) => handleChange("command", e)} />
      <br />
      <br />
      <button onClick={handleClick}>发送</button>
      <br />
      <br />
      <br />
      <div>回复:</div>
      <div>{response}</div>
      <br />
      <br />
      <br />
      <WebSocketComponent />
    </>
  );
}

export default App;
