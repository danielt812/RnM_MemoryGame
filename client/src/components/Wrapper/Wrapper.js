import React from 'react';
import './Wrapper.scss';

const Wrapper = (props) => (
	<div className={`wrapper ${props.background}`}>{props.children}</div>
);

export default Wrapper;
