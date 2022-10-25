import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Viewone({ setType }) {
  const [obj, setObj] = useState([]);
  useEffect(() => {
    console.log("useeffe");
    fetchProducts();
  }, []);

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

    setObj(fetchProducts);

    // }
  };
  return (
    <div className="search">

      <button
        onClick={() => {
          setType(2);
        }}
      >
        go back
      </button>
      <div>
        {obj.map((data) => {
          return (
            // <div className=''>
            // <div key={data.imageId} id="image" >
            //   <img src={"/images/" + data.imageName} alt="img" width="300" height="200"/>
            // </div>
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

            // <section class="p-4">
            //   <div class="container">
            //     <div class="row">
            //       <div class="col-md-4">
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
      <div className="white" text="">
        Welcome
      </div>
    </div>
  );
}

export default Viewone;
