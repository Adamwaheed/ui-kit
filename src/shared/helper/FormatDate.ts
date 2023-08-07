import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function formatDate(dateString: string): string {
	if ("" === dateString) return "";

	const date = dayjs(dateString).tz("Indian/Maldives");
	return date.format("DD-MM-YYYY");
}
