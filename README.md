# Remix tar directory-data reproduction

This reproduces `parseTar` losing stream alignment when a directory entry declares a nonzero size.

```sh
npm ci
npm test
```

The script constructs an archive containing a directory with 12 declared data bytes and padding, followed by `file.txt`. The directory body should remain empty and both entries should be emitted. Remix 3.0.0 instead parses the directory data block as another header and throws before emitting `file.txt`.

