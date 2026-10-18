import assert from 'node:assert/strict'

import { createFileResponse } from 'remix/response/file'

let file = new File(['0123456789'], 'video.mp4', { type: 'video/mp4' })
let request = new Request('https://example.com/video.mp4', {
  headers: { Range: 'items=0-4' },
})

let response = await createFileResponse(file, request)
let actual = {
  status: response.status,
  body: await response.text(),
  contentRange: response.headers.get('Content-Range'),
}

console.log(actual)

assert.deepEqual(actual, {
  status: 200,
  body: '0123456789',
  contentRange: null,
})
