import List from "./List";
import data from "./data";
import { useState } from "react";
const App = () => {
  const [people, setPeople] = useState(data);

  if (people.length === 0) {
    return (
      <main>
        <section className="container">
          <h3>No birthdays today</h3>
          <button className="btn btn-block" onClick={() => setPeople(data)}>
            Refresh
          </button>
        </section>
      </main>
    );
  }
  const clearUser = (id) => {
    setPeople((prev) => prev.filter((person) => person.id !== id));
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} clearUser={clearUser} />
        <button className="btn btn-block" onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
