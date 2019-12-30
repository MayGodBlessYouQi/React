import React from 'react';

export default props => {
	const { search } = props.location
	var urlSearchParam = new URLSearchParams(search)
	var params = {}
	for (var param of urlSearchParam.entries()) {
		param[param[0]] = param[1]
	}
	return (
		<div>
			<p>{}</p>
		</div>
	)
}
