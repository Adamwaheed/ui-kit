import { defineStore } from "pinia";

export type MemberFoundStatusData = {
	record_id: number;
	name: string;
	date_of_birth: string;
	date_of_death: string;
	institution: string;
};

export type MemberFoundStatus = {
	data: MemberFoundStatusData;
};

export type MemberNotFoundStatus = {
	response: object;
	status: string;
	options: object;
	message: string;
	name: string;
};

export type MemberStatus = MemberFoundStatus | MemberNotFoundStatus;

export const useMemberStore = defineStore("member", () => {
	const config = useRuntimeConfig();
	const token = useCookie("auth_token", {
		domain: config.public.session_domain,
	});
	const headers = {
		"Content-type": "application/json; charset=UTF-8",
		Authorization: `Bearer ${token.value}`,
	};

	const documents = ref([]);

	// const getMemberDocumentsFromState = (memberId: number) => {
	//   return documents.value.filter(item => item['deceased_member_id'] == memberId);
	// }

	const searchMemberIdentifier = ref();
	const searchMemberDOB = ref();

	const setSearchParams = (nid: any, dob: any) => {
		searchMemberIdentifier.value = nid;
		searchMemberDOB.value = dob;
	};

	const getMemberDocuments = async (memberId: number) => {
		const data: [] = await $fetch(
			`${config.public.drs_api}/members/${memberId}/documents`,
			{
				method: "get",
				headers: headers,
			}
		);

		documents.value = data;
	};

	const getMember = async (identifer: string, dob: string) => {
		return await $fetch(`${config.public.drs_api}/members/get-member`, {
			method: "post",
			body: {
				identifer: identifer,
				dob: dob,
			},
			headers: headers,
		});
	};

	const getMemberStatus = async (identifer: string, dob: string) => {
		return await $fetch(
			`${config.public.drs_api}/members/status?nid=${identifer}&dob=${dob}`,
			{
				method: "get",
				headers: headers,
			}
		);
	};

	return {
		documents,
		getMemberDocuments,
		getMember,
		getMemberStatus,
		searchMemberIdentifier,
		searchMemberDOB,
		setSearchParams,
		// getMemberDocumentsFromState
	};
});
