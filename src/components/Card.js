import React from "react";

function Card({ title, imageSource, text }) {
  return (
    <div className="card" style={{ height: "420px", marginBottom: "2rem" }}>
      <div className="card-img-container">
        <img
          className="photo"
          src={imageSource}
          alt=""
         
        />
      </div>

      <div className="card-body">
        <h4 className="card-title" style={{fontWeight:"900"}}>{title}</h4>
        <p className="card-text text-secondary">{text}</p>
      </div>
    </div>
  );
}

export default Card;
