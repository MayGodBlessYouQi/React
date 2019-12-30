import React, { Component } from 'react'
import data from './finish.js'
export default class Finish extends Component {
    render() {
        return (
            <ul className='hot'>
                {
					data.map((item, index) => {
						return <li key={index} className='hot_li'>
							<img src={item.img} alt="济公传" width='134' />
							<div className='hot_left'>
								{item.book}
								<span className='hot_span'>{item.title}</span>
							</div>
						</li>
					})
				}
            </ul>
        )
    }
}
