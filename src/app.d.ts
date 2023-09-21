// See https://kit.svelte.dev/docs/types#app
import type { UserWithRoles } from '$server/auth/users';
import { PrismaClient } from '@prisma/client/index.d.ts';
// Import the relevant types

// for information about these interfaces
declare global {
	declare namespace svelteHTML {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		interface HTMLAttributes<T> {
			popover?: string | boolean | null;
			popovertarget?: string | null;
		}
	}

	interface MapConstructor<K, V> {
		groupBy: <T>(callback: (value: V, key: K) => T) => Map<T, Map<K, V>>;
	}

	namespace App {
		// interface Error {}
		interface Locals {
			prisma: PrismaClient;
			form_data: Record<string, unknown>;
			session: {
				ip: string;
				country: string;
			};
			user: UserWithRoles | null;
			active_theme_name: string;
		}

		// interface PageData {}
		// interface Platform {}
	}

	interface Document {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		startViewTransition: (callback: any) => void; // Add your custom property/method here
	}
}

export {};
