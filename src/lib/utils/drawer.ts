import { drawerStore } from '@skeletonlabs/skeleton';
import type { DrawerSettings } from '@skeletonlabs/skeleton';

interface Id {
	id: string;
}

export default function drawerOpen(id: Id): void {
	const settings: DrawerSettings = id || { id: 'navigation' };
	drawerStore.open(settings);
}

export function drawerClose(): void {
	drawerStore.close();
}
