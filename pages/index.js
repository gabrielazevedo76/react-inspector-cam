import { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import axios from "axios";

import { Button } from "@mui/material";
import styles from "./styles.module.css";
import SendIcon from "@mui/icons-material/Send";

function Home() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const clearCapture = () => {
    setImgSrc(null);
  };

  const camView = () => {
    return (
      <>
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        <div className={styles.camOptions}>
          <Button
            onClick={capture}
            variant="contained"
            className={styles.btnScreenshot}
          >
            Foto
          </Button>
        </div>
      </>
    );
  };

  const picView = () => {
    return (
      <>
        {imgSrc && <img className={styles.pictureInPicture} src={imgSrc} />}
        <div className={styles.pictureOptions}>
          <Button
            onClick={clearCapture}
            variant="contained"
            className={styles.btnSend}
          >
            Voltar
          </Button>
          <Button
            color="success"
            onClick={clearCapture}
            variant="contained"
            className={styles.btnSend}
            endIcon={<SendIcon />}
          >
            Enviar
          </Button>
        </div>
      </>
    );
  };

  const sendPic = () => {
    // TO DO
  };

  return (
    <>
      <div className={styles.container}>{imgSrc ? picView() : camView()}</div>
    </>
  );
}

export default Home;
