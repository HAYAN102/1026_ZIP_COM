import "antd/dist/antd.css";
import React from "react";
import "./App.css";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {
  useHistory,
  Link,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import UploadPage from "./upload/index.js";

function App() {
  const history = useHistory();
  return (
    <div>
      <Link to="/">
        <div id="header">
          <span>쟈쟌~~~~</span>
        </div>
      </Link>
      <div id="uploadButton">
        <Button
          type="primary"
          ghost
          onClick={() => {
            history.push("/upload");
          }}
          icon={<UploadOutlined />}
        >
          이미지 업로드 하기
        </Button>
      </div>

      <Switch>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
