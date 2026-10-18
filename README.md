# If-None-Match weak comparison reproduction

This reproduces `IfNoneMatch.matches()` using strong entity-tag comparison instead of the weak comparison required for `If-None-Match`.

```sh
npm ci
npm test
```

Both comparisons print `false`, then the assertion fails because weak and strong entity tags with the same opaque tag should match in either direction.
