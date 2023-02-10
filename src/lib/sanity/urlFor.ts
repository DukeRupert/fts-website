import Sanity from './sanityClient';
import imageUrlBuilder from '@sanity/image-url';
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder: ImageUrlBuilder = imageUrlBuilder(Sanity);
export function urlFor(source: SanityImageSource): ImageUrlBuilder {
	return builder.image(source);
}
