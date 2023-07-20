import { DefineComponent } from "vue";
import type { Notification } from "../../../types/Notification";

export declare const PoNotificationHub: DefineComponent<
	{
		notifications: Notification[] | null;
		hasNewNotifications: boolean;
	},
	{},
	{},
	{},
	{
		"button-click": (value: string) => void;
	}
>;
