<script lang="ts">
	import Github from '$assets/github.svg';
	import DropdownMenu from '$lib/DropdownMenu.svelte';
	import { enhance } from '$app/forms';
	import { loading } from '$state/loading';
	import { form_action } from '$lib/form_action';
	import type { User } from '@prisma/client';

	export let user: User | null;
</script>

{#if user}
	<DropdownMenu popover_id="user-menu">
		<img class="avatar" slot="dropdown-button" src={user.avatar_url} alt="User Avatar" />
		<div slot="dropdown-links">
			<form use:enhance={form_action({ message: 'Logout ' })} action="/?/logout" method="POST">
				<button type="submit">Logout</button>
			</form>
		</div>
	</DropdownMenu>
{:else}
	<a on:click={() => loading.setLoading(true)} href="/api/oauth/github" rel="external">
		<img width="20" src={Github} alt="Github Logo" /> Login With Github</a
	>
{/if}

<style lang="postcss">
	.avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border: solid 2px var(--white);
	}
</style>
