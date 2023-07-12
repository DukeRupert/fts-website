import { wrench, heart, mail, job, star } from '$lib/icons';
export interface CompanyData {
	name: string;
	logo: Logo;
	contact: Contact;
	social: Social;
	year: number;
	mapEmbed: string;
}

export interface Contact {
	phone: Phone;
	location: Location;
	email: string;
}

export interface Location {
	address: string;
	city: string;
	state: string;
	zip: string;
}

export interface Phone {
	string: string;
	href: string;
}

export interface Logo {
	label: string;
	href: string;
	img: Img;
}

export interface Img {
	src: string;
	alt: string;
	height: string;
	width: string;
}

export interface Social {
	facebook: string;
	instagram: string;
	youtube: string;
}

export const COMPANY: CompanyData = {
	name: 'FtS Excavation',
	logo: {
		label: 'FtS Excavation',
		href: '/',
		img: {
			src: 'logo/FtS_Logo_Cream.webp',
			alt: 'FtS Excavation logo',
			height: '492',
			width: '469'
		}
	},
	contact: {
		phone: {
			string: '253-439-8003',
			href: 'tel:2534398003'
		},
		location: {
			address: '12714 151st St E.',
			city: 'Puyallup',
			state: 'WA',
			zip: '98374'
		},
		email: 'service@fts-excavation.com'
	},
	social: {
		facebook: 'https://www.facebook.com/profile.php?id=100070776072205',
		instagram: 'https://www.instagram.com/fts_excavation/',
		youtube: 'https://m.youtube.com/channel/UC_LbjVWjiiFg3h9lB6rcvGQ'
	},
	year: 2019,
	mapEmbed:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d347153.94511725573!2d-122.83725475534202!3d47.1746916080952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490fdfbb8a31aab%3A0xb896498a4891ace9!2sFtS-Excavation%2C%20LLC!5e0!3m2!1sen!2sus!4v1662738385349!5m2!1sen!2sus'
};

export const LINKS = [
	{
		label: 'Services',
		href: '/services',
		svg: wrench,
		subitems: [
			{ title: 'Drainage', href: '/services/drainage' },
			{ title: 'Site preparation', href: '/services/site-preparation' }
		]
	},
	{
		label: 'Projects',
		href: '/projects',
		svg: star,
		subitems: []
	},
	{ label: 'About', href: '/about-us', svg: heart, subitems: [] },
	{
		label: 'Contact',
		href: '/contact-us',
		svg: mail,
		subitems: []
	},
	{
		label: 'Jobs',
		href: '/jobs',
		svg: job,
		subitems: []
	}
];

// name: FTS Excavation
export const mailChimpListId = '30f791302d';
