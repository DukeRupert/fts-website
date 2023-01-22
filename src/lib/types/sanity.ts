export interface Post {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	body: Body[];
	categories: Category[];
	excerpt: string;
	image: Image;
	publishedAt: string;
	slug: Slug;
	title: string;
}

export interface Body {
	_key: string;
	_type: string;
	children: Child[];
	markDefs: any[];
	style: string;
}

export interface Child {
	_key: string;
	_type: string;
	marks: any[];
	text: string;
}

export interface Category {
	_key: string;
	_ref: string;
	_type: string;
}

export interface Image {
	_type: string;
	asset: Asset;
}

export interface Asset {
	_ref: string;
	_type: string;
}

export interface Slug {
	_type: string;
	current: string;
}