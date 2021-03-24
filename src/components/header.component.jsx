import React from 'react';
import './header.style.css';

const Header = ({ history }) => {
	return (
		<header className='header'>
			<h1 className='title' onClick={() => history.push('/TheChat_App')}>
				The Chat
			</h1>
		</header>
	);
};

export default Header;
