
import { React } from 'react';
import data from '../services/data';
import addFields from '../services/studentManager';

const headings = [
	'Name',
	'RollNo',
	'tamil',
	'english',
	'science',
	'maths',
	'social',
	'total',
	'result',
	'rank',
];

const tableHeader = (title, index) =>
	<th key={ index } className="tableHeaderStyle">
		{title}
	</th>;

const tableData = (student, key) =>
	<tr key={ key }>
		<td className="stringStyle">{student.student}</td>
		<td className="numberStyle">{student.rollNo}</td>
		<td className="numberStyle">{student.tamil}</td>
		<td className="numberStyle">{student.english}</td>
		<td className="numberStyle">{student.science}</td>
		<td className="numberStyle">{student.maths}</td>
		<td className="numberStyle">{student.social}</td>
		<td className="numberStyle">{student.total}</td>
		<td className="stringStyle">{student.result}</td>
		<td className="numberStyle">{student.rank}</td>

	</tr>;

const MarkSheet = () =>
	<div>
		<table className="titleStyle">
			<thead>
				<tr>
					{headings.map(tableHeader)}
				</tr>
			</thead>
			<tbody>
				{addFields(data).map(tableData)}
			</tbody>
		</table>
	</div>;

export default MarkSheet;
