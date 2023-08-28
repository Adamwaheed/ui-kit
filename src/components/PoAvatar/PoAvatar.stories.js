// YourComponent.stories.js

import PoAvatar from "./PoAvatar.vue";

import PoAvatarDocs from "./PoAvatarDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Avatar",
	component: PoAvatar,
	parameters: {
		docs: {
			page: PoAvatarDocs,
			description: {
				component: "Avatar component",
			},
		},
		backgrounds: {
			default: "gray",
			values: [{ name: "gray", value: "#f8fafc" }],
		},
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
	components: { PoAvatar },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: '<PoAvatar v-bind="args" />',
});

export const Avatar = Template.bind();
export const AvatarExtraSmall = Template.bind();
export const AvatarSmall = Template.bind();
export const AvatarMedium = Template.bind();
export const AvatarLarge = Template.bind();
export const AvatarExtraLarge = Template.bind();
export const AvatarNoImage = Template.bind();
export const AvatarNoImageExtraSmall = Template.bind();
export const AvatarNoImageMedium = Template.bind();
export const AvatarLoading = Template.bind();

Avatar.args = {
	/* 👇 The args you need here will depend on your component */
	src: "https://i.pravatar.cc/150?img=65",
	name: "Jhon Hatric",
};
AvatarExtraSmall.args = {
	/* 👇 The args you need here will depend on your component */
	src: "https://i.pravatar.cc/150?img=47",
	name: "Jhon Hatric",
	avatarSize: "xs",
};

AvatarSmall.args = {
	/* 👇 The args you need here will depend on your component */
	src: "https://i.pravatar.cc/150?img=51",
	name: "Jhon Hatric",
	avatarSize: "sm",
};
AvatarMedium.args = {
	/* 👇 The args you need here will depend on your component */
	src: "https://i.pravatar.cc/150?img=49",
	name: "Jhon Hatric",
	avatarSize: "md",
};
AvatarLarge.args = {
	/* 👇 The args you need here will depend on your component */
	src: "https://i.pravatar.cc/150?img=33",
	name: "Jhon Hatric",
	avatarSize: "lg",
};
AvatarExtraLarge.args = {
	/* 👇 The args you need here will depend on your component */
	src: "https://i.pravatar.cc/150?img=35",
	name: "Jhon Hatric",
	avatarSize: "xl",
};
AvatarNoImage.args = {
	/* 👇 The args you need here will depend on your component */
	name: "Ibrahim Hatric",
	avatarSize: "sm",
};
AvatarNoImageMedium.args = {
	/* 👇 The args you need here will depend on your component */
	name: "Mohamed Simple",
	avatarSize: "md",
};
AvatarNoImageExtraSmall.args = {
	/* 👇 The args you need here will depend on your component */
	name: "Furathama Person",
	avatarSize: "xs",
};
AvatarLoading.args = {
	/* 👇 The args you need here will depend on your component */
	name: "Furathama Person",
	avatarSize: "xs",
	isLoading: true,
};
