import assert from 'node:assert/strict'

import { createFileResponse } from 'remix/response/file'

async function requestRange(file, range) {
  return createFileResponse(
    file,
    new Request('https://example.com/file', {
      headers: { Range: range },
    }),
    { acceptRanges: true },
  )
}

let zeroSuffix = await requestRange(new File(['hello'], 'hello.txt'), 'bytes=-0')
let emptySuffix = await requestRange(new File([], 'empty.txt'), 'bytes=-1')

let actual = {
  zeroSuffix: {
    status: zeroSuffix.status,
    contentRange: zeroSuffix.headers.get('Content-Range'),
  },
  emptySuffix: {
    status: emptySuffix.status,
    contentRange: emptySuffix.headers.get('Content-Range'),
  },
}

console.log(actual)

assert.deepEqual(actual, {
  zeroSuffix: {
    status: 416,
    contentRange: 'bytes */5',
  },
  emptySuffix: {
    status: 200,
    contentRange: null,
  },
})
