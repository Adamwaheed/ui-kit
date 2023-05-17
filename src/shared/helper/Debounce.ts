export default function debounce(
	callback: (...args: any[]) => void,
	wait: number
) {
	let timeoutId: NodeJS.Timeout;
	return function (...args: any[]) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			callback.apply(this, args);
		}, wait);
	};
}
