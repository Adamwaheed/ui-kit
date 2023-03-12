import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
	const config = useRuntimeConfig();

	const user = ref({});

	const getUser = async () => {
		const token = useCookie("auth_token", {
			domain: config.public.session_domain,
		});
		//  token.value = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkExMzA5MjAiLCJzdWIiOiI2MmY3NTRhYS02ZTY0LWQ4NzQtMjg5OC0xNzAxMjFhODdhZjAiLCJ1c2VyX2lkIjo2MiwiaWF0IjoxNjc4MDg1NzY1LCJleHAiOjE2NzgwOTY1NjUsImlzcyI6Imh0dHBzOi8vYXV0aC5zdGFnLm1wYW8ubXYifQ.L6Zdti9e8B25rJf8JUFu2TBDLO-4btdS7pxfCUhA-0TnJ2dEg8t124ezFIzoPjPVS57ZEgPo8sGsByD6xNITblTwq3Og-XggphCtbbVP4ak0-CAiA_dmuUA1f66O9P9iMuoy77g50RzIbe75-uUik_Zpl80hzf2-UcoOwOE_9bnp1vyspQglcs3o2z6GIFleD26uYbdo35CeM-aFCM4vDeO5MDosyw8gkA7cWmp5I525ggUgt4-VMs-Xwa3w8vZR-WTFQEvPSgJR6yAUpoXIpE-POyhWN3N7AwlmYMBwS8hgulxEu-trGBBndd5dABZnr8U8WiFjWhsR8tHMXaqWWcyZ0EH9fspR0L_5OvfImd-Pcszh40gvVjx-RKJLDaNkn7L9qJYRLQtB5a4yxFDGzcA3do-MyGsBboL1ehBt2jqj1a7qcjIZmli89IzaVVtpK-Lj_2VoHeqL1vYi9x1-wPR1N5SwsXZfB_xns7UhC-nhI6PGIiklV5U8E4iCjYRfAJb4-y0HIf2zsw45m-EhoS6EWzCXoLzJ1SSwKYh_rQC-BGkCo3FHRrIafJKe3xtI6Fecc0YHmezJuglvkDosgqrxiv_v721fA1nc36_eyYCTGyNEVfRGG4fxWrvez-DVub2lC9cbexTvS3x5YKDTbja0YJFKgcyZwR8N-NTO7NA';
		const url = computed(() => `${config.public.auth_api}/secret`);
		const response = await fetch(url.value, {
			method: "GET",
			headers: {
				"Content-type": "application/json; charset=UTF-8",
				Authorization: `Bearer ${token.value}`,
			},
		});
		if (response.ok) {
			const data = await response.json();
			user.value = data;
		} else {
			user.value = "";
		}
	};

	const switchTransactingAs = async (identifer: string, entityId: number) => {
		return await $fetch(
			`${config.public.authorisation_api}/users/${identifer}/transacting-as`,
			{
				method: "post",
				body: { entity_id: entityId },
			}
		).then((response: any) => {
			if (!response.error) {
				return getUser();
			}
		});
	};

	const setUser = async (data: any) => {
		user.value = data;
	};

	const logOut = async () => {
		const token = useCookie("auth_token", {
			domain: config.public.session_domain,
		});
		token.value = null;
		user.value = "";
	};

	return {
		user,
		getUser,
		setUser,
		switchTransactingAs,
		logOut,
	};
});
