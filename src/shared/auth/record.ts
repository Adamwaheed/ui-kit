import { defineStore } from "pinia";

interface DisputeType {
	id: number;
	name: string;
}

export const useRecordStore = defineStore("record", () => {
	const config = useRuntimeConfig();
	const token = useCookie("auth_token", {
		domain: config.public.session_domain,
	});
	const headers = {
		"Content-type": "application/json; charset=UTF-8",
		Authorization: `Bearer ${token.value}`,
	};

	const disputeTypes = ref<DisputeType[]>([]);

	const getDisputeTypes = async () => {
		if (!disputeTypes.value.length) {
			const data: [] = await $fetch(`${config.public.drs_api}/dispute-types`, {
				method: "get",
				headers: headers,
			});

			data.forEach((item) => {
				disputeTypes.value.push({
					id: item["id"],
					name: item["name"],
				});
			});
		}
	};

	const getOneRecord = async (id: number) => {
		return await $fetch(`${config.public.drs_api}/records/${id}`, {
			method: "get",
			headers: headers,
		});
	};

	return {
		disputeTypes,
		getDisputeTypes,
		getOneRecord,
	};
});
