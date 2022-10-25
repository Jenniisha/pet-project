import React from "react";
import { useState } from "react";
import "./new.css";

import FileUploadService from "../../service/service";
import Footer from "../Footer";
//import { useEffect } from 'react';



function Upload({ setFile, save }) {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  // const [fileInfos, setFileInfos] = useState([]);

  // useEffect(() => {
  //     FileUploadService.getFiles().then((response) => {
  //     setFileInfos(response.data);
  //   });
  // }, []);

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  const upload = () => {
    let currentFile = selectedFiles[0];

    setProgress(0);
    setCurrentFile(currentFile);

    FileUploadService.upload(
      currentFile,
      (event) => {
        setProgress(Math.round((100 * event.loaded) / event.total));
      },
      "Nature"
    )
      .then((response) => {
        setMessage(response.data.message);
        //   return FileUploadService.getFiles();
      })
      .catch(() => {
        setProgress(0);
        setMessage("Could not upload the file!");
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
  };

  return (
    <>
      {/* <div className="UploadForm"> */}
      <div>
        <center>
          {currentFile && (
            <div className="progress">
              <div
                className="progress-bar progress-bar-info progress-bar-striped"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: progress + "%" }}
              >
                {progress}%
              </div>
            </div>
          )}
          <div className="uploadform">
            <div className="container">
              <div className="container">
                <label className="btn btn-default">
                  <input type="file" onChange={selectFile} />
                </label>
              </div>
              <div>
                <button
                  className="btn btn-warning"
                  disabled={!selectedFiles}
                  onClick={upload}
                >
                  Upload
                </button>
              </div>
            </div>

            <div className="alert alert-light" role="alert">
              {message}
            </div>

            <Footer />
          </div>
        </center>
      </div>
    </>
  );
}

export default Upload;
