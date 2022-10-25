import React from "react";

function View({ dat, setType }) {
  return (
    //     <div>
    //     <button onClick={()=>{
    // setType(2)
    //     }}>Go To Table</button>

    //        <div>CATAGORY : {dat.category}</div>
    //        <div> <img src={"/images/" + dat.imageName} alt="img" width="300" height="200"/></div>
    //        <div>DISCRIPTION :{dat.description} </div>

    //     </div>

      <div className="search">

      <button
        onClick={() => {
          setType(2);
        }}
      >
        Go To Table
      </button>

      {/* <div className="col-md-9">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src={"/images/" + dat.imageName}
                alt="img"
                width="300"
                height="200"
              />
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="col-md-9">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                className="card-img-top"
                src={"/images/" + dat.imageName}
                alt="haiii"
              />
            </div>
          </div>
        </div>
      </div>
    </div> */}

      <div class="flexUser">
        {/* <div className="col-md-9"> */}
        <div className="row">
          {/* <div className="col-md-4 mb-4"> */}
          <div className="card">
            <img
              className="card-img-top"
              src={"/images/" + dat.imageName}
              alt="haiii"
            />
          </div>
        </div>
      </div>
      <div className="white" text="">
        Welcome
      </div>
    </div>
  );
}

export default View;
