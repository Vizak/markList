import { React } from 'react';
import addFields from '../services/studentManager';
import TableHeader from './TableHeader';
import TableData from './TableData';
import Empty from './Empty';

const MarkSheet = (context) => {
	const { state: { markSheet }, config: { fields }} = context;

	return <div>
		<table className="titleStyle">
			<thead>
				<tr>{fields.map((field) =>
					TableHeader({ data: { field }}))}</tr>
				<Empty { ...context }/>
			</thead>
			<tbody>
				{addFields(markSheet).map((marks, index) =>
					TableData({ ...context,
						data: { marks, index, fields }}))}
			</tbody>
		</table>
	</div>;
};

export default MarkSheet;
