import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Uploadpage() {
  const history = useHistory();
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
    <div>
      <span>업로드페이지</span>;
    </div>
  );
}

export default Uploadpage;
