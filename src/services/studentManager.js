
const passMark = 35;

const getTotal = (student) => {
	const { tamil, english, maths, science, social } = student;

	return Number(tamil)
	+ Number(english)
	+ Number(maths)
	+ Number(science)
	+ Number(social);
};

const getResult = (student) => (Math.min(
	student.tamil, student.english, student.maths,
	student.science, student.social
)
	>= passMark
	? 'PASS'
	: 'FAIL');

const updatedSheet = (studentsData) => {
	let rank = 1;
	const sortedTotal = studentsData.sort((a, b) => b.total - a.total);

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
	const studentsData = students.map(processSheet);

	return updatedSheet(studentsData);
};

export default addFields;
