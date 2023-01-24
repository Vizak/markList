import { React } from 'react';
import removeSheet from '../../services/removeSheet';

const DeleteButton = (context) => {
	const { state, setState } = context;

	return (
		<button
			onClick={ () => setState({
				...state,
				markSheet: removeSheet(context),
			}) }
		>Delete
		</button>);
};

export default DeleteButton;
