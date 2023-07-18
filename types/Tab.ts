import type { HeroIcon } from "./HeroIcon";

export interface Tab {
	name: string;
	icon: HeroIcon;
	iconColor: string;
	href?: string;
	current?: boolean;
	count?: number;
}
