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

    <div>
      <button
        onClick={() => {
          setType(2);
        }}
      >
        Go To Table
      </button>

      <div className="col-md-9">
        <div className="row">
          {/* {dat.map((values) => {
            const { id, category, imageName, description } = values; */}

          
                <div className="col-md-4 mb-4" >
                  <div className="card">
                    <img
                      src={"/images/" + dat.imageName}
                      alt="img"
                      width="300"
                      height="200"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{dat.category}</h5>
                      <h5 className="card-title">{dat.description}</h5>
                    </div>
                  </div>
                </div>
              
        </div>
      </div>
    </div>
  );
}

export default View;
