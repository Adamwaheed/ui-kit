import type { HTMLAttributes, VNodeProps } from "vue";

// use the next type instead of this
export type HeroIcon = (
	props: JSX.IntrinsicAttributes & { [key: string]: any }
) => JSX.Element;

export type FunctionalComponent<Props = HTMLAttributes & VNodeProps> = (
	props: Props,
	context: any
) => JSX.Element;
