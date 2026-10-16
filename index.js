import assert from 'node:assert/strict'
import { parse } from 'remix/headers'

let raw = 'Content-Type: text/html\r\nbad name: ignored\r\nCache-Control: no-cache'
let headers = parse(raw)

assert.equal(headers.get('Content-Type'), 'text/html')
assert.equal(headers.get('Cache-Control'), 'no-cache')
assert.equal(headers.has('bad name'), false)
