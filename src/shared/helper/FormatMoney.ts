export default function formatMoney(num: string | number): string | null {
	const parsedNum =
		typeof num === "string" ? Number(num.replace(/,/g, "")) : num;
	if (isNaN(parsedNum)) return null;

	const formattedNum = parsedNum.toLocaleString("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	return formattedNum;
}
