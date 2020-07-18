const formatSeconds = (seconds: number): string => {
	const minutes = Math.floor(seconds / 60);
	const freeSeconds = seconds - minutes * 60;
	return `${minutes}:${freeSeconds <= 9 ? `0${freeSeconds}` : freeSeconds}`;
};

export default formatSeconds;
