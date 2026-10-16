import assert from 'node:assert/strict'
import { Range } from 'remix/headers'

let suffixZero = Range.from('bytes=-0').normalize(500)
let mixedRanges = Range.from('bytes=1000-,0-99').normalize(500)

console.log({ suffixZero, mixedRanges })

assert.deepEqual(suffixZero, [])
assert.deepEqual(mixedRanges, [{ start: 0, end: 99 }])
