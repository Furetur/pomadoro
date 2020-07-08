const getIdGenerator = (start = 0) => {
	let lastId = start;
	const getNextId = () => {
		lastId += 1;
		return lastId;
	};

	return getNextId;
};

export default getIdGenerator;
