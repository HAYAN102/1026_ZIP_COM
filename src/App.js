import "antd/dist/antd.css";
import MainPageComponent from "./main/index.js";
import React from "react";
import "./App.css";

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

      <Switch>
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
