import { peek } from '@laufire/utils/debug';
import { rndString } from '@laufire/utils/random';
import { React } from 'react';

const AddButton = (context) => {
	const { state, setState, config: { idLength }} = context;
	const { markSheet, currentMarkSheet } = state;

	peek(state);
	return (
		<button
			onClick={ () => setState({
				...state,
				markSheet: [...markSheet,
					{
						...currentMarkSheet,
						id: rndString(idLength),
					}],
			}) }
		>Add
		</button>);
};

export default AddButton;
