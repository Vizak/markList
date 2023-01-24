import { rndString } from '@laufire/utils/random';
import markList from './markList';

const addId = (context) => {
	const { config: { idLength }} = context;

	return markList.map((mark) => ({
		...mark,
		id: rndString(idLength),
	}));
};

export default addId;
