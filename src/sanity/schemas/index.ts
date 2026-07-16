import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './documents/blog'
import quote from './objects/quote'
import { navBar } from './documents/nav-bar'
import { navLink } from './objects/nav-link'
import { ctaButton } from './objects/cta-button'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,quote,navBar,navLink,ctaButton],
}
