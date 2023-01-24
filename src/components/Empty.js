import { React } from 'react';
import AddButton from './Buttons/AddButton';
import EmptyCells from './EmptyCells';
import Input from './Input/Index';

const Empty = (context) =>
	<tr>
		<Input { ...context }/>
		<EmptyCells/>
		<EmptyCells/>
		<EmptyCells/>
		<td><AddButton{ ...context }/></td>
	</tr>;

export default Empty;
