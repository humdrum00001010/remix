import assert from 'node:assert/strict'
import { ContentRange } from 'remix/headers'

let reversed = ContentRange.from('bytes 100-50/200')
let outsideLength = ContentRange.from('bytes 0-100/100')

console.log({ reversed: reversed.toString(), outsideLength: outsideLength.toString() })

assert.equal(reversed.toString(), '')
assert.equal(outsideLength.toString(), '')
