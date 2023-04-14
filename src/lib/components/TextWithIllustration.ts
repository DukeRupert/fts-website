export interface TextWithIllustration {
	_key: string;
	_type: string;
	excerpt: string;
	features: null;
	heading: string;
	image: Image;
	tagline: string;
}

export interface Image {
	_type: string;
	alt: string;
	asset: Asset;
}

export interface Asset {
	_ref: string;
	_type: string;
}
