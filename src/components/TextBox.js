/* eslint-disable max-lines-per-function */
import { peek } from '@laufire/utils/debug';
import { React } from 'react';

const TextBox = (context) => {
	const { state, setState } = context;
	const { marks } = state;

	return <div>
		<label>RollNo:</label>
		<input
			type="number"
			onChange={ (event) => setState({
				...state,
				marks: { ...marks, rollNo: event.target.value },
			}) }
		/>
		<label>Name:</label>
		<input
			type="text"
			onChange={ (event) => setState({
				...state,
				marks: { ...marks, name: event.target.value },
			}) }
		/>
		<label>Tamil:</label>
		<input
			type="number"
			onChange={ (event) => {
				peek(event.target.value);
				return setState({
					...state,
					marks: { ...marks, tamil: Number(event.target.value) },
				});
			} }
		/>
		<label>English:</label>
		<input
			type="number"
			onChange={ (event) => setState({
				...state,
				marks: { ...marks, english: Number(event.target.value) },
			}) }
		/>
		<label>Science:</label>
		<input
			type="number"
			onChange={ (event) => setState({
				...state,
				marks: { ...marks, science: Number(event.target.value) },
			}) }
		/>
		<label>Maths:</label>
		<input
			type="number"
			onChange={ (event) => setState({
				...state,
				marks: { ...marks, maths: Number(event.target.value) },
			}) }
		/>
		<label>Social:</label>
		<input
			type="number"
			onChange={ (event) => setState({
				...state,
				marks: { ...marks, social: Number(event.target.value) },
			}) }
		/>

	</div>;
};

export default TextBox;
