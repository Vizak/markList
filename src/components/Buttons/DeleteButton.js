import { React } from 'react';
import MarkSheetManager from '../../services/MarkSheetManager';

const DeleteButton = (context) => {
	const { state, setState } = context;

	return (
		<button
			onClick={ () => setState({
				...state,
				markSheet: MarkSheetManager.removedMarkSheet(context),
			}) }
		>Delete
		</button>);
};

export default DeleteButton;
