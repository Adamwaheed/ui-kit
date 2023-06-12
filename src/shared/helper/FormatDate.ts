export default function formatDate(dateString: string): string {
	if ("" === dateString) return "";

	const date = new Date(dateString);
	const options: Intl.DateTimeFormatOptions = {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	};
	return date.toLocaleDateString("en-UK", options).split("/").join("-");
}
