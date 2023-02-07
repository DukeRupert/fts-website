import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = 'pciykl66';
const dataset = 'production';
const apiVersion = '2021-10-21';

const Sanity = sanityClient({
	projectId: projectId,
	dataset: dataset,
	apiVersion: apiVersion, // use current UTC date - see "specifying API version"!
	token: '', // or leave blank for unauthenticated usage
	useCdn: true // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(Sanity);

export const urlFor = (source: string) => {
	return builder.image(source);
};

export default Sanity;
