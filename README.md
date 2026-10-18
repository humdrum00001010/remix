# If-Range validator classification reproduction

This reproduces three validator-classification failures in `IfRange.matches()` from Remix 3.0.0 while pinning the intended behavior for an absent header.

```sh
npm ci
npm test
```

All four tests should pass. The absent-header case does, but the other three fail because an explicitly empty header is treated as absent, a valid HTTP date falls through to entity-tag comparison when `lastModified` is absent, and a bare token is normalized into a quoted entity tag.
