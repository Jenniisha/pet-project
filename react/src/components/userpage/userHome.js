import React, { useState } from "react";
import axios from "axios";
import "./userpage.css";

function UserHome() {
  const [Photographers, setPhotographers] = useState([]);
  const [images, setImages] = useState([]);
  const [welcome, setWelcome] = useState(false);
  let jwtToken = localStorage.getItem("jwtToken");
  let token = `Bearer ${jwtToken}`;
  //  let userId=localStorage.getItem("userId");
  console.log(token);

  const header = {
    Authorization: token,
    "Access-Control-Allow-Origin": "*",
  };

  const getprofilePhotos = async (id) => {
    let res = await axios.get(`http://localhost:8080/photo/getall/${id}`, {
      headers: header,
    });
    let fetchProducts = res.data;
    setImages(fetchProducts);
  };

  const getPhotos = async (category) => {
    //eturn axios.get(url+"/"+contestCode,{headers:header})

    let res = await axios.get(`http://localhost:8080/search/get/${category}`, {
      headers: header,
    });

    console.log(res.data);

    setPhotographers(res.data);
    console.log(setPhotographers);
  };

  return (
    <div className="search">
      <select
        class="form-select form-select-lg mb-3"
        onChange={(e) => {
          getPhotos(e.target.value);
          setWelcome(false);
        }}
        aria-label=".form-select-lg example"
      >
        <option selected>Search For Photographer</option>
        <option value="Nature">Nature</option>
        <option value="Wedding">Wedding</option>
        <option value="Concert">Concert</option>
      </select>
      <div>
        <div className="background">
          {!welcome ? (
            <>
              {Photographers.map((data) => (
                <div class="flexUser">
                  <div className="row">
                    <div class="card">
                      <div class="card-title">Name: {data.name}</div>
                      <div class="card-title">Contact No: {data.contact}</div>
                      <div class="card-body">
                        <button
                          onClick={() => {
                            setWelcome(true);
                            getprofilePhotos(data.id);
                          }}
                        >
                          Go to This Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div> //flexuser
              ))}
            </>
          ) : (
            <div>
              <button
                onClick={() => {
                  setWelcome(false);
                }}
              >
                Back
              </button>

              {images.map((data) => {
                return (
                  // <div className="">
                  //   <div key={data.imageId} id="image">
                  //     <img
                  //       src={"/images/" + data.imageName}
                  //       alt="img"
                  //       width="300"
                  //       height="200"
                  //     />
                  //   </div>
                  // </div>

                  // <div className="col-md-9">
                  //   <div className="row">
                  //     <div className="col-md-2 mb-4">
                  //       <div className="card">
                  //         <div key={data.imageId} id="image">
                  //           <img
                  //             src={"/images/" + data.imageName}
                  //             alt="img"
                  //             width="300"
                  //             height="200"
                  //           />
                  //         </div>
                  //       </div>

                  //     </div>
                  //  </div>
                  // </div>

                  // <div class="col-md-2 mb-4">
                  //   <div class="row">
                  //     <div class="card">
                  //       <div key={data.imageId} id="image">
                  //         <img
                  //           src={"/images/" + data.imageName}
                  //           alt="img"
                  //           width="300"
                  //           height="200"
                  //         />
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div>

                  <div class="flexUser">
                    {/* <div className="col-md-9"> */}
                    <div className="row">
                      {/* <div className="col-md-4 mb-4"> */}
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={"/images/" + data.imageName}
                          alt="haiii"
                        />
                      </div>
                    </div>
                  </div>

                  // </div>
                  // </div>

                  // <section class="p-4">
                  //   <div class="container">
                  //     <div class="row">
                  //       <div class="col-md-3">
                  //         <div class="card dest-card">
                  //           <div>
                  //             <img
                  //               src={"/images/" + data.imageName}
                  //               class="img-fluid dest-img"
                  //               alt=""
                  //             />
                  //           </div>
                  //         </div>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </section>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="white" text="">
        Welcome
      </div>
    </div>
  );
}

export default UserHome;
