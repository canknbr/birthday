import React from "react";
import Person from "./Person";

const List = ({ people, clearUser }) => {
  return (
    <section>
      {people.map((person) => (
        <Person key={person.id} {...person} clearUser={clearUser} />
      ))}
    </section>
  );
};

export default List;
