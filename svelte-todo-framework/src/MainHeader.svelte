<style>
    .c-header {
        display: flex;
        align-items: flex-end;
        padding: var(--inner-gap);
        background-color: royalblue;
        box-shadow: 0 .1rem .2rem rgba(var(--color-main), .6);
        color: #FFF;
    }
</style>

<script>
	import MainHeader from './MainHeader.svelte';
	let title = 'Svelte';
</script>

<header class="c-header">
    icon
    <h1 class="c-heading">
        ToDo
        <span class="c-heading__strong">{title}</span>
    </h1>
</header>