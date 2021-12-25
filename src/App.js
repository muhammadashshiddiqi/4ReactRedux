import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { AddKontak, ListKontak } from './components';

function App() {
	return (
		<div style={{margin:"30px"}}>
			<h3>Kontaks App</h3>
			<hr />
			<AddKontak />
			<hr />
			<ListKontak />
		</div>
	);
}

export default App;
