import React from "react";

const TouristInfoCards = ({ img, url, name }) => (
  <div className="card">
    <img src={img} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <a href="#" className="btn btn-primary">
        Go visit
      </a>
    </div>
  </div>
);

export default TouristInfoCards;
