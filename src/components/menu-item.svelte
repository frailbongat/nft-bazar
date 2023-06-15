<script>
	export let href = '#';
	export let active = false;
	export let name = '';
</script>

{#if active}
	<a {href} class="font-archivo font-medium text-lg tracking-[0.01em] text-accent">
		{name}
	</a>
	<div class="w-[18px] h-[3px] rounded-2xl bg-accent mt-[7px]" />
{:else}
	<a {href} class="font-archivo font-medium text-lg tracking-[0.01em] hover:text-accent transition">
		{name}
	</a>
	<div class="w-[18px] h-[3px] rounded-2xl bg-transparent mt-[7px]" />
{/if}
