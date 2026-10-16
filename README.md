# Remix header backslash reproduction

This reproduces backslash loss when a `Content-Disposition` value is serialized and reparsed.

```sh
npm install
npm run reproduce
```

The script expects the filename to remain `one\two.txt`. With Remix `3.0.0-rc.5`, it is reparsed as `onetwo.txt` and the assertion fails.
