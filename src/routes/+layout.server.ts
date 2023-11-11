import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const user_id = cookies.get('user_id');

	if (!user_id) {
		console.log('New user');
		const uuid = crypto.randomUUID();
		cookies.set('user_id', uuid);
		return { returning_user: false };
	}

	return { returning_user: true };
};
