import { defineStore } from "pinia";

interface DocumentType {
	id: number;
	name: string;
}

export const useDocumentStore = defineStore("document", () => {
	const config = useRuntimeConfig();
	const token = useCookie("auth_token", {
		domain: config.public.session_domain,
	});
	const headers = {
		"Content-type": "application/json; charset=UTF-8",
		Authorization: `Bearer ${token.value}`,
	};

	const documentTypes = ref<DocumentType[]>([]);

	const getDocumentTypes = async () => {
		if (!documentTypes.value.length) {
			const data: [] = await $fetch(`${config.public.drs_api}/document-types`, {
				method: "get",
				headers: headers,
			});

			data.forEach((item) => {
				documentTypes.value.push({
					id: item["id"],
					name: item["name"],
				});
			});

			// documentTypes.value = data;
		}
	};

	return {
		documentTypes,
		getDocumentTypes,
	};
});
