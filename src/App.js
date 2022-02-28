import './App.css';
import { useQuery } from "@apollo/client";
import {INFO_PERSON} from "./queries/index";

function App() {
  const { loading, error, data } = useQuery(INFO_PERSON);
  
console.log(data, "es dataaaa")
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>an error occurred...</p>;
  }

  return (
    <section className="parent">
      {data.characters.results.map((person, index) => (
        <div className="card" key={person.name}>
          <img src={person.image} alt="Avatar" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <b>{person.name}</b>
            </h4>
            <p>
              <b>GENDER:</b> {person.gender}
            </p>
            <p>
              <b>SPECIE:</b> {person.species}
            </p>
            <p>
              <b>Last known location:</b> {person.location.name}
            </p>
            <p>
              <b>First seen in:</b> {person.episode[0].name}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default App;
