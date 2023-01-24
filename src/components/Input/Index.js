import { React } from 'react';
import InputBox from './InputBox';

const Input = (context) => {
	const { config: { fields }} = context;

	return fields.map((field, key) => <td key={ key }>
		{field.input === true
			? <td><InputBox { ...{ ...context, data: field } }/></td>
			: ''}
	</td>);
};

export default Input;
