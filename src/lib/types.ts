// Generated by https://quicktype.io

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
	children?: Child[];
	markDefs?: any[];
	style?: string;
	asset?: Asset;
}

export interface Asset {
	_ref: string;
	_type: string;
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

export interface Slug {
	_type: string;
	current: string;
}

// Youtube Types
export interface SearchListResponse {
	kind: string;
	etag: string;
	nextPageToken: string;
	regionCode: string;
	pageInfo: PageInfo;
	items: Item[];
}

export interface Item {
	kind: ItemKind;
	etag: string;
	id: ID;
	snippet: Snippet;
}

export interface ID {
	kind: IDKind;
	videoId: string;
}

export enum IDKind {
	YoutubeVideo = 'youtube#video'
}

export enum ItemKind {
	YoutubeSearchResult = 'youtube#searchResult'
}

export interface Snippet {
	publishedAt: string;
	channelId: ChannelID;
	title: string;
	description: string;
	thumbnails: Thumbnails;
	channelTitle: ChannelTitle;
	liveBroadcastContent: LiveBroadcastContent;
	publishTime: string;
}

export enum ChannelID {
	UCLbjVWjiiFg3H9LB6RcvGQ = 'UC_LbjVWjiiFg3h9lB6rcvGQ'
}

export enum ChannelTitle {
	FtSExcavation = 'FtS Excavation'
}

export enum LiveBroadcastContent {
	None = 'none'
}

export interface Thumbnails {
	default: Default;
	medium: Default;
	high: Default;
}

export interface Default {
	url: string;
	width: number;
	height: number;
}

export interface PageInfo {
	totalResults: number;
	resultsPerPage: number;
}

// Generated by https://quicktype.io

export interface Review {
	firstName: string;
	lastName:  string;
	rating:    number;
	review:    string;
	image:     { [key: string]: string };
}

