import React from 'react';

const Paginations = props => {
	return (
		<div className="endPage">
			<div className="btn_group">
				<button className="btn" onClick={props.prevPage}>
					Anterior
				</button>
				<button className="btn" onClick={props.nextPage}>
					Siguiente
				</button>
			</div>
			<div className="paginacions">
				<p>Página {props.page}</p>
			</div>
		</div>
	);
};

export default Paginations;