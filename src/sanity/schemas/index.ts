import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blog'
import quote from './quote'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,quote],
}
