import { React } from 'react';
import AddButton from '../Buttons/AddButton';
import Input from '../Input/Index';

const Empty = (context) =>
	<tr>
		<Input { ...context }/>
		<td><AddButton{ ...context }/></td>
	</tr>;

export default Empty;
