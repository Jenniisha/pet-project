import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

function Viewall({ setType, setDat }) {
  let jwtToken = localStorage.getItem("jwtToken");
  const [state, setState] = useState(1);

  let token = `Bearer ${jwtToken}`;
  let userId = localStorage.getItem("userId");
  console.log(token);

  const header = {
    Authorization: token,
    "Access-Control-Allow-Origin": "*",
  };
  const [Photographers, setPhotographers] = useState([]);
  useEffect(() => {
    console.log("useeffe");
    fetchProducts();
  }, [state]);

  const deleteImage = (imageId) => {
    console.log(imageId);
    delete_im(imageId);
  };

  const Download = (imageId) => {
    console.log("jhh");
    download_im(imageId);
  };

  let download_im = async (imageId) => {
    let res = await axios.get(
      `http://localhost:8080/photo/download/${imageId}`,
      {
        headers: header,
      }
    );

    // if(res==='successfully deleted'){
    //   alert("SUCCESSFULLY DELETED")
    // }
  };

  let delete_im = async (imageId) => {
    let res = await axios.delete(
      `http://localhost:8080/photo/delete/${imageId}`,
      {
        headers: header,
      }
    );

    setState(1 + state);
    // if(res==='successfully deleted'){
    //   alert("SUCCESSFULLY DELETED")
    // }
  };

  let fetchProducts = async () => {
    let jwtToken = localStorage.getItem("jwtToken");
    let token = `Bearer ${jwtToken}`;
    let userId = localStorage.getItem("userId");
    console.log(token);

    const header = {
      Authorization: token,
      "Access-Control-Allow-Origin": "*",
    };
    //eturn axios.get(url+"/"+contestCode,{headers:header})

    let res = await axios.get(`http://localhost:8080/photo/getall/${userId}`, {
      headers: header,
    });

    console.log(res.data);
    let fetchProducts = res.data;
    setPhotographers(fetchProducts);
  };

  return (
    <div>
      <Table classname="table" bordered>
        {" "}
        <thead>
          <tr>
            <th scope="col">IMAGE ID</th>
            <th scope="col">CATEGORY</th>
            {/* <th scope="col">FILE TYPE</th> */}
            <th scope="col">CONTENT</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        {Photographers.length === 0 ? (
          <div>No Records Found</div>
        ) : (
          <tbody>
            {Photographers.map((contests) => (
              <tr key={contests.imageId}>
                <td>{contests.imageId}</td>
                <td>{contests.category}</td>

                <td>{contests.imageName}</td>

                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      deleteImage(contests.imageId);
                    }}
                  >
                    Delete
                  </button>
                  &nbsp; &nbsp;
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setType(4);
                      setDat(contests);
                    }}
                  >
                    View
                  </button>
                  {/* <button
                    className="btn btn-primary"
                    onClick={() => {
                      Download(contests.imageName);
                    }}
                  >
                    Download
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
      <div className="white" text="">
        Welcome
      </div>
    </div>
  );
}

export default Viewall;
