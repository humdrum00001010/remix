import assert from 'node:assert/strict'
import { test } from 'node:test'

import { IfRange } from 'remix/headers/if-range'

test('matches unconditionally when If-Range is absent', () => {
  let ifRange = IfRange.from(null)

  assert.equal(ifRange.matches({}), true)
})

test('does not match when If-Range is explicitly empty', () => {
  let ifRange = IfRange.from('')

  assert.equal(ifRange.matches({}), false)
})

test('does not treat an HTTP date as an entity tag', () => {
  let value = 'Wed, 21 Oct 2015 07:28:00 GMT'
  let ifRange = IfRange.from(value)

  assert.equal(ifRange.matches({ etag: `"${value}"` }), false)
})

test('does not normalize a bare validator into an entity tag', () => {
  let ifRange = IfRange.from('abc')

  assert.equal(ifRange.matches({ etag: '"abc"' }), false)
})
