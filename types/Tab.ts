import type { FunctionalComponent } from "./HeroIcon";

export interface Tab {
	name: string;
	icon: FunctionalComponent;
	iconColor: string;
	href?: string;
	current?: boolean;
	count?: number;
}
