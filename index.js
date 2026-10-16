import assert from 'node:assert/strict'
import { ContentDisposition } from 'remix/headers'

let filename = String.raw`one\two.txt`
let serialized = ContentDisposition.from({ type: 'attachment', filename }).toString()
let reparsed = ContentDisposition.from(serialized).filename

console.log({ filename, serialized, reparsed })
assert.equal(reparsed, filename)
