import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const user_id = cookies.get('user_id');
	if (!user_id) {
		const uuid = crypto.randomUUID();
		cookies.set('user_id', uuid);
		return {
			promo: true
		};
	}

	return {
		promo: false
	};
};
