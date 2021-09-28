import React from "react";

const List = ({ person }) => {

  return (
    <div className="person_container">
      {person.map((person) => (
        <div className="person" key={person.id}>
          <div className="left_info">
            <img src={person.image} alt={person.name} />
            <div className="list_info">
              <h3>{person.name}</h3>
              <p>{person.age} years</p>
            </div>
          </div>
          <button className="remove">remove</button>
        </div>
      ))}
    </div>
  );
};

export default List;
