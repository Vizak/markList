
import { React } from 'react';
const TableData = ({ student, rollNo, tamil, english, maths, science, social,
	total, result, rank },
key) =>
	<tr key={ key }>
		<td className="stringStyle">{student}</td>
		<td className="numberStyle">{rollNo}</td>
		<td className="numberStyle">{tamil}</td>
		<td className="numberStyle">{english}</td>
		<td className="numberStyle">{science}</td>
		<td className="numberStyle">{maths}</td>
		<td className="numberStyle">{social}</td>
		<td className="numberStyle">{total}</td>
		<td className="stringStyle">{result}</td>
		<td className="numberStyle">{rank}</td>

	</tr>;

export default TableData;
