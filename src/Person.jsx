import React from "react";

const Person = ({ id, name, age, image, clearUser }) => {
  return (
    <div className="person">
      <img className="img" src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
      <button className="btn" onClick={() => clearUser(id)}>
        remove
      </button>
    </div>
  );
};

export default Person;
