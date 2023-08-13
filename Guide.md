# Guide to update /layouts/main.vue

Updating from `0.2.17` to `0.2.20`.

The current main.vue looks like this

```html
<template>
	<div class="min-h-full pt-16">
		<PoTopBar> </PoTopBar>
	</div>
	<div class="h-full max-w-full">
		<PoSidebarDrawer :content="sidebarContent" />
		<main class="shell-content" id="shell-content-root">
			<slot></slot>
			<PoFooter />
		</main>
	</div>
</template>
```

and it needs to be changed to

```html
<template>
	<PoWrap>
		<PoSidebarDrawer />
		<PoMain>
			<PoTopBar> </PoTopBar>
			<slot></slot>
			<PoFooter />
		</PoMain>
	</PoWrap>
</template>
```

these new components from UIKit needs to be imported.

```js
import {
	PoTopBar,
	PoWrap,
	PoMain,
	PoSidebarDrawer,
	PoFooter,
} from "@pension/ui-kit";
```
