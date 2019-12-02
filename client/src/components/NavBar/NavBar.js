import React from 'react';
import { Row, Col } from 'antd';

const NavBar = () => {
	return (
		<div className = 'component-navbar-wrapper'>
			<div className = 'component-navbar-avatar_wrapper'>
				This is avatar
			</div>
			<div className = 'component-navbar-info_wrapper'>
				This is user calendar info
			</div>
			<div className = 'component-navbar-button_wrapper'>
				This is log out button
			</div>
			
			{/* <Row 
				className = 'component-navbar-avatar_wrapper'
				align = 'middle'
				justify = 'space-around'
			>
				<Col span = {3}>
					This is a text
				</Col>
				<Col span = {3}>
					This is a text
				</Col>
				<Col span = {3}>
					This is a text
				</Col>
			</Row> */}
		</div>
	);
};

export default NavBar;