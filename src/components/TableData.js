import { React } from 'react';
import DeleteButton from './Buttons/DeleteButton';

const TableData = (context) => {
	const { data: { marks, index, fields }} = context;

	return <tr key={ index } className="stringStyle">
		{fields.map((field, key) =>
			<td key={ key } className="numberStyle">{marks[field.name]}</td>)}
		<DeleteButton { ...context }/>
	</tr>;
};

export default TableData;
