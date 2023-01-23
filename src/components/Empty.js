import { React } from 'react';
import AddButton from './AddButton';
import EmptyCells from './EmptyCells';
import TextBox from './TextBox';

const Empty = (context) =>
	<tr>
		<TextBox { ...context }/>
		<EmptyCells/>
		<EmptyCells/>
		<EmptyCells/>
		<td><AddButton{ ...context }/></td>
	</tr>;

export default Empty;
