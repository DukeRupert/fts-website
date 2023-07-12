import type { WithContext, Organization } from 'schema-dts';

export const jsonld_schema: WithContext<Organization> = {
	'@context': 'https://schema.org',
	'@type': 'HomeAndConstructionBusiness',
	name: 'FtS-Excavation',
	url: 'http://www.fts-excavation.com/',
	logo: 'https://www.fts-excavation.com/logo/FtS_Logo_Cream.webp',
	description:
		'FtS-Excavation: Your trusted Puyallup excavation experts. Skilled professionals, advanced equipment, and reliable service. Residential, commercial, and industrial excavation. Contact us for a free consultation.',
	address: {
		'@type': 'PostalAddress',
		streetAddress: '123 Main Street',
		addressLocality: 'Puyallup',
		addressRegion: 'WA',
		postalCode: '98373',
		addressCountry: 'US'
	},
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: '+1-253-439-8003',
		contactType: 'customer service'
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: '47.12345',
		longitude: '-122.12345'
	},
	openingHours: 'Mo-Fr 08:00-18:00',
	priceRange: '$$',
	sameAs: ['https://www.facebook.com/ftsexcavation/', 'https://www.instagram.com/fts_excavation'],
	hasMap: 'https://www.google.com/maps/place/123+Main+Street,+Puyallup,+WA+12345/',
	image: [
		'https://cdn.sanity.io/images/pciykl66/production/4a5161a78205cacdb7de07291474adca8c9cefb0-610x610.webp?w=610&fit=fillmax',
		'https://cdn.sanity.io/images/pciykl66/production/7f2eb7913226d6fe2576964d215ff9bc3f90913f-2988x1992.webp?w=1200&h=800&fm=webp',
		'https://cdn.sanity.io/images/pciykl66/production/11934b2da9b96a8f49418debb367c3ce79a7d450-1200x675.jpg?rect=94,0,1013,675&w=600&h=400&fm=webp'
	],
	email: 'service@fts-excavation.com',
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: '5.0',
		reviewCount: '26'
	},
	brand: {
		'@type': 'Brand',
		name: 'FtS-Excavation',
		logo: 'https://www.fts-excavation.com/logo/FtS_Logo_Cream.webp'
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Excavation Services',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Site Preparation',
					description:
						'Experience expert site preparation services at FtS-Excavation. We clear, grade, and prepare sites for construction projects with precision and efficiency. From land clearing to drainage solutions, trust us for reliable and comprehensive site preparation. Contact us today for exceptional results.',
					url: 'https://www.fts-excavation.com/services/site-preparation'
				}
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Drainage',
					description:
						'Discover effective drainage solutions tailored to your property at FtS-Excavation. Our experienced team specializes in designing and implementing custom drainage systems to prevent water-related issues. From French drains to grading, we optimize water flow and protect your property from erosion and flooding. Experience exceptional craftsmanship and reliable results. Contact us for expert drainage services.',
					url: 'https://www.fts-excavation.com/services/drainage'
				}
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Industrial Excavation',
					description:
						'We specialize in industrial excavation projects, including land clearing, earthmoving, and infrastructure development for factories and industrial sites.',
					url: 'http://www.fts-excavation.com/industrial-excavation'
				}
			}
		]
	}
};
