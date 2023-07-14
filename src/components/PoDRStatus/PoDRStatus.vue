<template>
	<span class="po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5">
		<h2
			v-if="null !== record"
			class="po-text-base po-font-medium po-text-slate-700"
		>
			Death was reported by {{ record.institution }}
		</h2>
		<div
			v-if="null !== request && 1 === request.type_id"
			class="po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
		>
			<ExclamationTriangleIcon
				class="po-shrink-0 po-w-6 po-stroke-orange-600"
			/>
			<span class="po-grow po-text-sm po-text-slate-600">
				This is a {{ request.type }} request and is in
				{{ request.state }} state.
			</span>
		</div>
		<div
			v-if="null !== request && 1 !== request.type_id"
			class="po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
		>
			<ExclamationTriangleIcon
				class="po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2"
			/>
			<div class="po-grow">
				<h3 class="po-text-base po-text-slate-700 po-font-medium">
					{{ request.type }}
				</h3>
				<p class="po-text-sm po-text-slate-600">
					The following {{ request.type }} was reported:
					<span class="po-font-medium"
						>{{ request.dispute_type
						}}<span v-if="request.date_of_death">
							(New date: {{ request.date_of_death }})</span
						></span
					>
				</p>
			</div>
		</div>
		<PoDescriptionList>
			<template v-slot:content>
				<div v-if="null !== member">
					<dt>Name</dt>
					<dd>{{ member.name }}</dd>
				</div>
				<div v-if="null !== member">
					<dt>Identifer</dt>
					<dd>{{ member.identifier }}</dd>
				</div>
				<div v-if="null !== member">
					<dt>Date of birth</dt>
					<dd>{{ member.dob }}</dd>
				</div>
				<div v-if="null !== record">
					<dt>Reported Date of death</dt>
					<dd>{{ record.date_of_death }}</dd>
				</div>
			</template>
		</PoDescriptionList>
		<span v-if="null === request" class="po-pt-5">
			<PoButton type="simple" @button-click="handleButtonClick">
				<template v-slot:label>
					<span class="po-flex po-items-center po-space-x-1">
						<BoltIcon class="po-w-4 po-h-4 po-stroke-current" />
						<span>File a dispute.</span>
					</span>
				</template>
			</PoButton>
		</span>
	</span>
</template>

<script lang="ts">
export default {
	name: "PoDRStatus",
};
</script>
<script setup lang="ts">
import { BoltIcon, ExclamationTriangleIcon } from "@heroicons/vue/24/outline";
import PoButton from "../PoButton/PoButton.vue";
import PoDescriptionList from "../PoDescriptionList/PoDescriptionList.vue";

interface Member {
	name: string;
	identifier: string;
	dob: string;
}
interface Record {
	institution: string;
	date_of_death: string;
}
interface Request {
	type_id: string | any;
	type: string | any;
	state: string | any;
	dispute_type: string | any;
	date_of_death: string | any;
}

interface Props {
	member?: Member | null;
	record?: Record | null;
	request?: Request | null;
}

withDefaults(defineProps<Props>(), {
	/**
	 * Member Object { name, identifier, dob }
	 */
	member: null,
	/**
	 * Record Object { id, institution, date_of_death }
	 */
	record: null,
	/**
	 * Request Object { id, type, state, dispute_type, institution, date_of_death }
	 */
	request: null,
});

const emit = defineEmits(["dispute-click"]);

function handleButtonClick() {
	emit("dispute-click", "clicked");
}
</script>
