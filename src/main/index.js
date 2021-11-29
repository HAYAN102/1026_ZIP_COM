import axios from "axios";
import React from "react";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

function MainPage() {
  const history = useHistory();
  const [banners, setBanners] = React.useState([]);

  return (
    <div id="banners">
      <div id="uploadButton">
        <Button
          type="primary"
          ghost
          onClick={() => {
            history.push("/upload");
          }}
          icon={<UploadOutlined />}
        >
          배너 업로드하기
        </Button>
      </div>
    </div>
  );
}

export default MainPage;
