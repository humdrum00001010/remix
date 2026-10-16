import assert from 'node:assert/strict'
import { Range } from 'remix/headers'

let huge = '9'.repeat(309)
let range = Range.from(`bytes=${huge}-`)
let serialized = range.toString()
let reparsed = Range.from(serialized)

console.log({ ranges: range.ranges, serialized, reparsed: reparsed.ranges })

assert.ok(Number.isSafeInteger(range.ranges[0].start))
assert.match(serialized, /^bytes=\d+-$/)
assert.deepEqual(reparsed.ranges, range.ranges)
