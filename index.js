import assert from 'node:assert/strict'

import { SuperHeaders } from 'remix/headers'

let headers = new SuperHeaders({
  'Access-Control-Max-Age': 'invalid',
  Age: 'invalid',
  'Content-Length': 'invalid',
  'Max-Forwards': 'invalid',
  'Upgrade-Insecure-Requests': 'invalid',
})

let values = {
  accessControlMaxAge: headers.accessControlMaxAge,
  age: headers.age,
  contentLength: headers.contentLength,
  maxForwards: headers.maxForwards,
  upgradeInsecureRequests: headers.upgradeInsecureRequests,
}

console.log(values)
assert.equal(values.contentLength, null)
