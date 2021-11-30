import axios from "axios";
import React from "react";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

function MainPage() {
  const history = useHistory();
  const [banners, setBanners] = React.useState([]);

  React.useEffect(function () {
    axios
      .get("https://69b99504-0bce-4fff-9de0-e95e1e36f9dc.mock.pstmn.io/banners")
      .then(function (result) {
        console.log(result);
        const imageData = result.data.imageUrl;
        console.log(imageData);
      })
      .catch(function (error) {
        console.error("에러발생 : ", error);
      });
  });

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
