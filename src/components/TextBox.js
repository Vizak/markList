import { React } from 'react';

const TextBox = (context) => {
	const { config: { inputs }, state, setState } = context;
	const { currentMark } = state;

	return inputs.map((input, key) => <td key={ key }>
		<input
			{ ...{ type: 'text',
				value: currentMark[input],
				onChange: ({ target: { value }}) => setState({
					...state,
					currentMark: { ...currentMark, [input]: input !== 'name'
						? Number(value)
						: value },
				}) } }

		/>
	</td>);
};

export default TextBox;
