import { React } from 'react';

const InputBox = (context) => {
	const { data: field, state, setState } = context;
	const { currentMark } = state;

	return (
		<input
			{ ...{ type: field.type,
				value: currentMark[field.name],
				onChange: ({ target: { value }}) => setState({
					...state,
					currentMark: { ...currentMark,
						[field.name]: field.type === 'number'
							? Number(value)
							: value },
				}) } }
		/>);
};

export default InputBox;
