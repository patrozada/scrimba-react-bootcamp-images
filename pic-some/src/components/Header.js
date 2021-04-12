import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
	return (
		<div>
			Header :)
			<Link to='/'>Back home</Link>
			<Link to='/cart'>Cart</Link>
		</div>
	)
}
