import { React } from 'react';

const TableData = ({ data: { marks, index, combinedInput }}) =>
	<tr key={ index } className="stringStyle">
		{combinedInput.map((input, key) =>
			<td key={ key } className="numberStyle">{marks[input]}</td>)}
	</tr>;

export default TableData;
