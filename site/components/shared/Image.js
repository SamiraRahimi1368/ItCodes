'use client'

import imageUrlBuilder from '@sanity/image-url'
import sanityConfig from '../../sanity-project/sanity.config'

const builder = imageUrlBuilder(sanityConfig)
function urlFor(source) {
    return builder.image(source)
}

export default urlFor