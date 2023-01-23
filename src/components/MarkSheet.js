import { React } from 'react';
import addFields from '../services/studentManager';
import TableHeader from './TableHeader';
import TableData from './TableData';
import Empty from './Empty';

const MarkSheet = (context) => {
	const { state: { markSheet }, config: { inputs, headings }} = context;
	const combinedInput = [...inputs, ...headings];

	return <div>
		<table className="titleStyle">
			<thead>
				<tr>{combinedInput.map(TableHeader)}</tr>
				<Empty { ...context }/>
			</thead>
			<tbody>
				{addFields(markSheet).map((marks, index) =>
					TableData({ ...context,
						data: { marks, index, combinedInput }}))}
			</tbody>
		</table>
	</div>;
};

export default MarkSheet;
