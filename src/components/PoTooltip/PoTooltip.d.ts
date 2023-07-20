import { DefineComponent } from "vue";
import type { Instance, Placement, PositioningStrategy } from "@popperjs/core";

export declare const PoTooltip: DefineComponent<
	{
		text: string;
		placement?: Placement | undefined;
		strategy?: PositioningStrategy | undefined;
	},
	{},
	{},
	{},
	{}
>;
