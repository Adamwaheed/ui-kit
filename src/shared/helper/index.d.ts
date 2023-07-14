declare module "./index" {
	export function formatDate(date: string): string;

	export function formatMoney(amount: string | number): string | null;

	export default function debounce(
		callback: (...args: any[]) => void,
		wait: number
	): (...args: any[]) => void;
}
