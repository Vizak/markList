import { React } from 'react';

const TextBox = (context) => {
	const { config: { headers }, state, setState } = context;
	const { marks } = state;

	return headers.map((header, key) => <span key={ key }>
		<label>{header}:</label>
		<input
			type="text"
			onChange={ (event) => setState({
				...state,
				marks: { ...marks, [header]: Number(event.target.value) },
			}) }
		/>
	</span>);
};

export default TextBox;
