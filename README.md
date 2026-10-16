# Remix Range normalization reproduction

This reproduces invalid bounds returned by `Range.normalize()` for zero-length suffixes and mixed satisfiable/unsatisfiable byte ranges.

```sh
npm install
npm run reproduce
```

With Remix `3.0.0-rc.5`, `bytes=-0` normalizes to `{ start: 500, end: 499 }`, and an unsatisfiable `1000-` member remains in a range set for a 500-byte resource.
