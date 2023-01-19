import { React } from 'react';

const AddButton = (context) => {
	const { state, setState } = context;
	const { currMarkSheet, marks } = state;

	return (
		<button
			onClick={ () => setState({
				...state,
				currMarkSheet: [...currMarkSheet, marks],
			}) }
		>Add
		</button>);
};

export default AddButton;
