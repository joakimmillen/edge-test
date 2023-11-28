import type { Config, Context } from '@netlify/edge-functions'
import * as test from './utils/test'

export default async (request: Request, context: Context) => {
  console.log('test: ', test)
  return new Response(JSON.stringify(context.geo.country))
}

export const config: Config = {
  path: ['/test'],
}
