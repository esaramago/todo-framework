import App from './App.svelte';

var app = new App({
	target: document.body,
	props: {
		// we'll learn about props later
		title: 'Svelte'
	}
});

export default app;