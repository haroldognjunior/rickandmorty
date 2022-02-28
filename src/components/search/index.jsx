import React from 'react';

const Search = props => {
	const handleChange = e => {
		props.searchData(e.target.value);
	};

	return (
		<form className="formSearch">
			<input type="text" placeholder="Find the person or character" name="search" id="search" onChange={handleChange} />
		</form>
	);
};

export default Search;