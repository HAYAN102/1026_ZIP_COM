import "antd/dist/antd.css";
import "./App.css";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function App() {
  return (
    <div>
      <div id="header">
        <span>쟈쟌~~~~</span>
      </div>
      <div id="uploadButton">
        <Button type="primary" ghost>
          <UploadOutlined />
          이미지 업로드 하기
        </Button>
      </div>
    </div>
  );
}

export default App;
