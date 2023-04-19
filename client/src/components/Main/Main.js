import React from 'react';
import './Main.scss';

const Main = (props) => (
	<div className={props.background}>{props.children}</div>
);

export default Main;
