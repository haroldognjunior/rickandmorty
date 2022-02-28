import React from 'react';
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {INFO_PERSON} from "../../queries/index";
import Paginations from '../paginations/index.jsx';


const Character = props => {
	const { loading, error, data } = useQuery(INFO_PERSON);
	const { info } = props.character;
  

	function statusCharacter(status){
		  switch (status) {
			  case 'Alive':
				  return <span className="circulStatus alive" />;
				  break;
			  case 'Dead':
				  return <span className="circulStatus dead" />;
				  break;
			  case 'unknown':
				  return <span className="circulStatus unknown" />;
				  break;
		  }
	}
  
	if (loading) {
	  return <p>Loading...</p>;
	}
  
	if (error) {
	  return <p>an error occurred...</p>;
	}
  
	return (
		<div>
	  <section className="characters">
		{data.characters.results.map((person, index) => (
		  <div className="character" key={person.name}>
			  <Link to={{ pathname: `/character/${person.id}`, state: person} }>
			<div className="image">
			<img src={person.image} alt={person.image}  />
			</div>
			</Link>
			<div className="info">
			  <h2>
				<b>{person.name}</b>
			  </h2>           
			  <p className="status">
										  {statusCharacter(person.status)}
										  {person.status} - &nbsp;
										  {person.species}
									  </p>
			  <p>
				Gender: {person.gender}
			  </p>
			  <p>
				Last known location: {person.location.name}
			  </p>
			  <p>
				First seen in: {person.episode[0].name}
			  </p>
			</div>
		  </div>
		))}		
	  </section>
	  {info.pages > 1 ? (
		<Paginations
			nextPage={props.nextPage}
			prevPage={props.prevPage}
			page={props.page}
		/>
	) : null}
	  </div>
	);
	
};

export default Character;