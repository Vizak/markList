/* eslint-disable max-lines-per-function */
import { React } from 'react';
import data from '../services/data';

const headings = [
	'Name',
	'RollNo',
	'tamil',
	'english',
	'science',
	'maths',
	'social',
	'total',
];

const studentData = data;

const getTotal = (student) => {
	const { tamil, english, maths, science, social } = student;

	return tamil + english + maths + science + social;
};

const addFields = () => studentData.map((student) => ({
	...student,
	total: getTotal(student),
}));

const MarkSheet = () =>
	<div>
		<table className="titleStyle">
			<thead>
				<tr>
					{headings.map((title, index) =>
						<th key={ index } className="tableHeaderStyle">
							{title}
						</th>)}
				</tr>
			</thead>
			<tbody>
				{ addFields().map((student, key) =>
					<tr key={ key }>
						<td className="stringStyle">{student.student}</td>
						<td className="numberStyle">{student.rollNo}</td>
						<td className="numberStyle">{student.tamil}</td>
						<td className="numberStyle">{student.english}</td>
						<td className="numberStyle">{student.science}</td>
						<td className="numberStyle">{student.maths}</td>
						<td className="numberStyle">{student.social}</td>
						<td className="numberStyle">{student.total}</td>
					</tr>)}
			</tbody>
		</table>
	</div>;

export default MarkSheet;
