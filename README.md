# Remix Content-Range validation reproduction

This reproduces `ContentRange.from()` accepting relationships that RFC 9110 defines as invalid.

```sh
npm install
npm run reproduce
```

With Remix `3.0.0-rc.5`, both `bytes 100-50/200` and `bytes 0-100/100` parse and serialize instead of being rejected.
