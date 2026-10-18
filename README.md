# Remix tar end-marker reproduction

This reproduces `parseTar` continuing past the standard two-zero-block end marker.

```sh
npm ci
npm test
```

The script constructs an archive containing `first.txt`, two zero blocks, and then `second.txt`. A tar reader should stop at the end marker and emit only `first.txt`. Remix 3.0.0 also emits `second.txt`, so the assertion fails.

