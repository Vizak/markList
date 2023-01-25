import { peek } from '@laufire/utils/debug';
import { React } from 'react';

const InputBox = (context) => {
	const { data: field, state, setState } = context;
	const { currentMarkSheet } = state;

	peek(currentMarkSheet);
	return (
		<input
			{ ...{ type: field.type,
				value: currentMarkSheet[field.name],
				onChange: ({ target: { value }}) => setState({
					...state,
					currentMark: { ...currentMarkSheet,
						[field.name]: field.type === 'number'
							? Number(value)
							: value },
				}) } }
		/>);
};

export default InputBox;
