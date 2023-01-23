import { React } from 'react';

const AddButton = (context) => {
	const { state, setState } = context;
	const { markSheet, currentMark } = state;

	return (
		<button
			onClick={ () => setState({
				...state,
				markSheet: [...markSheet, currentMark],
			}) }
		>Add
		</button>);
};

export default AddButton;
