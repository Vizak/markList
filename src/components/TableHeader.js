import { React } from 'react';

const TableHeader = ({ data: { field }}) =>
	<th className="tableHeaderStyle">
		{field.name}
	</th>;

export default TableHeader;
