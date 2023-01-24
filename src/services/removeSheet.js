
const removeSheet = (context) => {
	const { state: { markSheet }, data: { marks: { id }}} = context;

	return markSheet.filter((sheet) =>
		id !== sheet.id);
};

export default removeSheet;
