<script lang="ts">
	import { Logo, MenuItem } from 'components';
	import '../app.css';
	import { page } from '$app/stores';

	interface MenuType {
		name: string;
		href: string;
	}

	const menus: MenuType[] = [
		{
			name: 'Marketplace',
			href: '/'
		},
		{
			name: 'NFT Collectibles',
			href: '/nft-collectibles'
		},
		{
			name: 'Mining',
			href: '/mining'
		},
		{
			name: 'Resources',
			href: '/resources'
		}
	];
</script>

<div class="bg-[#F3FFFF] text-default font-inter min-h-screen">
	<div class="max-w-[1200px] mx-auto">
		<div class="flex items-center justify-between py-[25px] relative z-10">
			<Logo />

			<ul class="flex items-center gap-7">
				{#each menus as menu}
					<!-- content here -->
					<li>
						<MenuItem {...menu} active={$page.url.pathname === menu.href} />
					</li>
				{/each}
			</ul>

			<div class="flex items-center gap-[30px]">
				<a href="/" class="font-archivo font-semibold text-lg tracking-[0.01em]">Sign up</a>
				<button
					class="text-white font-archivo text-lg font-semibold px-8 py-[14px] rounded-full bg-accent"
				>
					Login
				</button>
			</div>
		</div>
		<div class="h-0.5 w-full bg-[#DCE4FF]" />

		<div class="relative">
			<slot />
		</div>
	</div>
</div>
