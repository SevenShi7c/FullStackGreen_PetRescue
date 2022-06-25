import React from "react";

function Details({ img,name, sex, age, status }) {
  return (
    <div>
      <div className="card">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title name">{name}</h5>
          <div className="card-text description">
            <p>Age: {age}</p>
            <p>Sex: {sex}</p>
            <p>Status: {status}</p>
            <p></p>
          </div>
          <a href="/" className="btn btn-primary">
            Xem chi tiết
          </a>
        </div>
      </div>
    </div>
  );
}

export default Details;
