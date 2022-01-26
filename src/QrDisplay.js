import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useSearchParams } from "react-router-dom";

function QrDisplay() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(searchParams.get("data") ?? "");
  const [fetched, setFetched] = useState(false);

  let code = searchParams.get("code");

  const handleToken = (token) => {
    if (token) {
      const data = `Bearer ${token}`;
      setData(data);
    }
  };

  useEffect(() => {
    if (code && !fetched) {
      fetch(`https://chrisr-xyz-gatekeeper.herokuapp.com/authenticate/${code}`)
        .then((response) => response.json())
        .then((response) => handleToken(response?.token))
        .catch((e) => console.log(e))
        .finally(() => setFetched(true));
    }
  });

  return data && <QRCode value={data} />;
}

export default QrDisplay;
