import "./index.css";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, message, Upload } from "antd";

function UploadPage() {
  const [imageUrl, setImageUrl] = useState(null);
  const history = useHistory();

  const onSubmit = (values) => {
    axios
      .post(
        "https://69b99504-0bce-4fff-9de0-e95e1e36f9dc.mock.pstmn.io/banners",
        {
          title: values.description,
          imageUrl: imageUrl,
        }
      )
      .then((result) => {
        console.log(result);
        history.replace("/");
      })
      .catch((error) => {
        console.error(error);
        message.error(`에러가 발생했습니다. %{error.message}`);
      });
  };

  const onChangeImage = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setImageUrl(imageUrl);
    }
  };

  return (
    <div>
      <span>업로드페이지</span>;
      <Form id="upload">
        <Upload
          name="image"
          action="https://69b99504-0bce-4fff-9de0-e95e1e36f9dc.mock.pstmn.io/banners"
          listType="picture"
          onChange={onChangeImage}
        >
          {imageUrl ? (
            <img
              src={`https://69b99504-0bce-4fff-9de0-e95e1e36f9dc.mock.pstmn.io/${imageUrl}`}
            />
          ) : (
            <div>
              <img src="/icons/camera.png" />
              <span>이미지를 업로드 해주세요.</span>
            </div>
          )}
        </Upload>
        <Form.Item
          label={<div className="upload-label">상세설명</div>}
          name="Description"
          rules={[{ required: true, message: "타이틀을 적어주세요" }]}
        >
          <Input placeholder="타이틀을 적어주세요" />
        </Form.Item>
        <div id="upload-button" size="large" htmlType="submit">
          <Button danger>등록하기</Button>
        </div>
      </Form>
    </div>
  );
}

export default UploadPage;
