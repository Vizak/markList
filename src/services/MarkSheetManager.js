import { rndString } from '@laufire/utils/random';
import markSheetData from '../data/markSheet';

const passMark = 35;

const addId = (context) => {
	const { config: { idLength }} = context;

	return markSheetData.map((mark) => ({
		...mark,
		id: rndString(idLength),
	}));
};

const removedMarkSheet = (context) => {
	const { state: { markSheet }, data: { marks: { id }}} = context;

	return markSheet.filter((sheet) =>
		id !== sheet.id);
};

const getTotal = ({ tamil, english, maths, science, social }) =>
	tamil + english + maths + science + social;

const getResult = (student) => (
	Math.min(
		student.tamil, student.english, student.maths,
		student.science, student.social
	) >= passMark
		? 'PASS'
		: 'FAIL');

const getRankedSheet = (studentsData) => {
	let rank = 1;
	const sortedTotal = studentsData.sort((a, b) => b.total - a.total);

	const Rank = sortedTotal.map((student) => ({
		...student,
		rank: student.result === 'PASS' ? rank++ : '-',
	}));

	return Rank;
};

const processSheet = (student) => ({
	...student,
	total: getTotal(student),
	result: getResult(student),
});

const addFields = (students) =>
	getRankedSheet(students.map(processSheet));

const MarkSheetManager = {
	addFields,
	addId,
	removedMarkSheet,
};

export default MarkSheetManager;
