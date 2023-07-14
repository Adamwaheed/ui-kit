export default function debounce(
	callback: (...args: any[]) => void,
	wait: number
): (...args: any[]) => void {
	let timeoutId: ReturnType<typeof setTimeout>;

	return function (...args: any[]) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			callback.apply(this, args);
		}, wait);
	};
}
