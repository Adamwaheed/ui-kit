import { defineStore } from "pinia";

type PageMeta = {
	currentPage?: number;
	lastPage?: number;
	next?: number;
	perPage?: number;
	prev?: number;
	total?: number;
};

type HistoryItem = {
	type: string;
	data: any;
	created_at: string;
};

type History = Array<HistoryItem>;

export const useRequestStore = defineStore("request", () => {
	const config = useRuntimeConfig();
	const token = useCookie("auth_token", {
		domain: config.public.session_domain,
	});
	const headers = {
		"Content-type": "application/json; charset=UTF-8",
		Authorization: `Bearer ${token.value}`,
	};

	const pageMeta = ref<PageMeta>({
		currentPage: 0,
	});
	const requests = ref([]);
	const pendingRequests = ref([]); // Todo: remove
	const verifiedRequests = ref([]); // Todo: remove
	const documents = ref([]);
	const history = ref<History>([]);

	const createRequest = async (form: FormData) => {
		return await $fetch(`${config.public.drs_api}/requests`, {
			method: "post",
			body: form,
			headers: {
				Authorization: `Bearer ${token.value}`,
			},
		});
	};

	const updateRequest = async (id: number, data: any) => {
		return await $fetch(`${config.public.drs_api}/requests/${id}`, {
			method: "PATCH",
			body: data,
			headers: headers,
		});
	};

	const createDateDispute = async (form: FormData) => {
		return await $fetch(`${config.public.drs_api}/requests/dispute-date`, {
			method: "post",
			body: form,
			headers: {
				Authorization: `Bearer ${token.value}`,
			},
		});
	};

	const createDeathDispute = async (data: any) => {
		return await $fetch(`${config.public.drs_api}/requests/dispute-death`, {
			method: "post",
			body: data,
			headers: headers,
		});
	};

	const getOnePendingRequest = async (id: number) => {
		let request = pendingRequests.value.find((pendingRequest) => {
			return pendingRequest["id"] == id;
		});

		if (!request) {
			request = await $fetch(`${config.public.drs_api}/requests/${id}`, {
				method: "get",
				headers: headers,
			});
		}

		return request;
	};

	const getOneVerifiedRequest = async (id: number) => {
		let request = verifiedRequests.value.find((verifiedRequest) => {
			return verifiedRequest["id"] == id;
		});

		if (!request) {
			request = await $fetch(`${config.public.drs_api}/requests/${id}`, {
				method: "get",
				headers: headers,
			});
		}

		return request;
	};

	const getAllRequests = async (pageNumber: number) => {
		const data: any = await $fetch(
			`${config.public.drs_api}/requests?page=${pageNumber}`,
			{
				method: "get",
				headers: headers,
			}
		);

		requests.value = data.data;
		pageMeta.value = data.meta;
	};

	const getPendingRequests = async (pageNumber: number) => {
		const data: any = await $fetch(
			`${config.public.drs_api}/requests/pending?page=${pageNumber}`,
			{
				method: "get",
				headers: headers,
			}
		);

		pendingRequests.value = data.data; // Todo: remove
		requests.value = data.data;
		pageMeta.value = data.meta;
	};

	const getVerifiedRequests = async (pageNumber: number) => {
		const data: any = await $fetch(
			`${config.public.drs_api}/requests/verified?page=${pageNumber}`,
			{
				method: "get",
				headers: headers,
			}
		);

		verifiedRequests.value = data.data; // Todo: remove
		requests.value = data.data;
		pageMeta.value = data.meta;
	};

	const verifyRequest = async (id: number) => {
		await $fetch(`${config.public.drs_api}/requests/${id}/verify`, {
			method: "post",
			headers: headers,
		}).then((response: any) => {
			if (response["state"]["name"] == "Verified") {
				pendingRequests.value = pendingRequests.value.filter(function (r) {
					return r["id"] !== id;
				});
			}
		});
	};

	const invalidateRequest = async (id: number) => {
		await $fetch(`${config.public.drs_api}/requests/${id}/invalidate`, {
			method: "post",
			headers: headers,
		}).then((response: any) => {
			if (response["state"]["name"] == "Invalid") {
				pendingRequests.value = pendingRequests.value.filter(function (r) {
					return r["id"] !== id;
				});
			}
		});
	};

	const approveRequest = async (id: number) => {
		await $fetch(`${config.public.drs_api}/requests/${id}/approve`, {
			method: "post",
			headers: headers,
		}).then((response: any) => {
			if (response["state"]["name"] == "Approved") {
				verifiedRequests.value = verifiedRequests.value.filter(function (r) {
					return r["id"] !== id;
				});
			}
		});
	};

	const getDocuments = async (requestId: number) => {
		const data: [] = await $fetch(
			`${config.public.drs_api}/requests/${requestId}/documents`,
			{
				method: "get",
				headers: headers,
			}
		);

		documents.value = data;
	};

	const addRemarksToRequest = async (requestId: number, data: any) => {
		return await $fetch(
			`${config.public.drs_api}/requests/${requestId}/remarks`,
			{
				method: "post",
				body: data,
				headers: headers,
			}
		);
	};

	const getHistory = async (requestId: number) => {
		const data: History = await $fetch(
			`${config.public.drs_api}/requests/${requestId}/history`,
			{
				method: "get",
				headers: headers,
			}
		);

		history.value = data;
	};

	const resetPageMeta = () => {
		pageMeta.value = {
			currentPage: 0,
		};
	};

	return {
		documents,
		requests,
		history,
		pendingRequests,
		verifiedRequests,
		createRequest,
		updateRequest,
		createDeathDispute,
		createDateDispute,
		getOnePendingRequest,
		getOneVerifiedRequest,
		getAllRequests,
		getPendingRequests,
		getVerifiedRequests,
		verifyRequest,
		approveRequest,
		invalidateRequest,
		getDocuments,
		getHistory,
		addRemarksToRequest,
		pageMeta,
		resetPageMeta,
	};
});
