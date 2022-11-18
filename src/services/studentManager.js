
const passMark = 35;

const getTotal = (student) => {
	const { tamil, english, maths, science, social } = student;

	return tamil + english + maths + science + social;
};

const getResult = (student) => (Math.min(
	student.tamil, student.english, student.maths,
	student.science, student.social
)
	>= passMark
	? 'PASS'
	: 'FAIL');

const updatedSheet = (students) => {
	let rank = 1;
	const sortedTotal = students.sort((a, b) => b.total - a.total);

	const updatedStudentRank = sortedTotal.map((student) => ({
		...student,
		rank: student.result === 'PASS' ? rank++ : '-',
	}));

	return updatedStudentRank;
};

const processSheet = (student) => ({
	...student,
	total: getTotal(student),
	result: getResult(student),

});

const addFields = (students) => {
	const studentData = students.map(processSheet);

	return updatedSheet(studentData);
};

export default addFields;
