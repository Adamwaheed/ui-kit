interface FormatMoneyOptions {
	decimalPoints?: number;
}

export default function formatMoney(
	num: string | number,
	options?: FormatMoneyOptions
): string | null {
	const parsedNum =
		typeof num === "string" ? Number(num.replace(/,/g, "")) : num;
	if (isNaN(parsedNum)) return null;

	const decimalPoints = options?.decimalPoints || 2;

	const formattedNum = parsedNum.toLocaleString("en-US", {
		minimumFractionDigits: decimalPoints,
		maximumFractionDigits: decimalPoints,
	});

	return formattedNum;
}
