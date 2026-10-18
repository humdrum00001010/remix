# Unknown Range unit reproduction

This reproduces `createFileResponse()` from the public `remix/response/file` entrypoint interpreting an unsupported HTTP `Range` unit as a byte range with Remix 3.0.0.

```sh
npm ci
npm run reproduce
```

The request sends `Range: items=0-4`. RFC 9110 requires an origin server to ignore a `Range` header whose unit it does not understand, so the response should be `200` with the full body and no `Content-Range` header. Remix 3.0.0 instead returns `206`, truncates the body, and emits a byte `Content-Range` header, causing the assertion to fail.
