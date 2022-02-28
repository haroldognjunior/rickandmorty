import React, { useState, useEffect } from 'react';

const Character = ( props) => {	
	let urlCharacters = `https://rickandmortyapi.com/api/character/${props.match.params.id}`;
	const [ character, setCharacter ] = useState({});

	useEffect(
		() => {
			fetchAPI();
		},
		[ urlCharacters ],
	);

	const fetchAPI = async () => {
		await fetch(urlCharacters)
			.then(res => res.json())
			.then(data => setCharacter(data))
			.catch(error => console.log(error));
	};

	function statusCharacter(status){
		switch (status) {
			case 'Alive':
				return <span className="circulStatus alive" />;
			case 'Dead':
				return <span className="circulStatus dead" />;
			case 'unknown':
				return <span className="circulStatus unknown" />;
		}
	}

	return (
		<section className="characters margin">
		
		  <div className="character" key={character.name}>
			  
			<div className="image">
			<img src={character.image} alt={character.image}  />
			</div>
			
			<div className="info">
			  <h2>
				<b>{character.name}</b>
			  </h2>           
			  <p className="status">
										  {statusCharacter(character.status)}
										  {character.status} - &nbsp;
										  {character.species}
									  </p>
			  <p>
				Gender: {character.gender}
			  </p>
			
			 
			</div>
		  </div>
			
	  </section>
	);
};

export default Character;