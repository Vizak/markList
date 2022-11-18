import { React } from 'react';

const TableHeader = (title, index) =>
	<th key={ index } className="tableHeaderStyle">
		{title}
	</th>;

export default TableHeader;
