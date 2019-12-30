import React, { Component } from 'react';
import data from './data/data.json'
export default class About extends Component {
	render() {
		return (
			<div>
				<h2>我是关于</h2>
				{
					data.imgs.map((item, index) => {
						return <img src={require('./' + item)} alt="" key={index} />
					})
				}
			</div>
		);
	}
}
