import { peek } from '@laufire/utils/debug';
import { rndString } from '@laufire/utils/random';
import { React } from 'react';

const AddButton = (context) => {
	const { config: { idLength }, state, setState } = context;
	const { currMarkSheet, marks } = state;

	return (
		<button
			onClick={ () => setState({
				...state,
				id: peek(rndString(idLength)),
				currMarkSheet: [...currMarkSheet, marks],
			}) }
		>Add
		</button>);
};

export default AddButton;
