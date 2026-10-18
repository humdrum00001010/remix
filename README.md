# Remix file suffix range reproduction

This reproduces two invalid partial responses from `createFileResponse()` in Remix 3.0.0:

- `Range: bytes=-0` on a nonempty file returns `206` with an inverted `Content-Range`.
- `Range: bytes=-1` on an empty file returns `206` with a negative `Content-Range`.

Install and run:

```sh
npm ci
npm test
```

The script prints both responses, then intentionally fails. A zero-length suffix range should be unsatisfiable (`416`), while a suffix range on an empty `File` should leave the full empty representation unchanged (`200` without `Content-Range`).
