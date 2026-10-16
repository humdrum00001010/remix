# Remix large Range numeral reproduction

This reproduces integer conversion overflow when parsing a `Range` header with a large decimal bound.

```sh
npm install
npm run reproduce
```

With Remix `3.0.0-rc.5`, the decimal bound becomes `Infinity`, serializes as `bytes=Infinity-`, and cannot be reparsed.
