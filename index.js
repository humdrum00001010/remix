import assert from 'node:assert/strict'

import { IfNoneMatch } from 'remix/headers'

let weakHeaderMatchesStrongResource = IfNoneMatch.from('W/"abc"').matches('"abc"')
let strongHeaderMatchesWeakResource = IfNoneMatch.from('"abc"').matches('W/"abc"')

console.log({ weakHeaderMatchesStrongResource, strongHeaderMatchesWeakResource })

assert.deepEqual(
  [weakHeaderMatchesStrongResource, strongHeaderMatchesWeakResource],
  [true, true],
  'If-None-Match must use weak entity-tag comparison',
)

