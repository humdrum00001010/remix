# Remix malformed raw-header reproduction

This reproduces `parse()` aborting when one raw header line contains an invalid field name.

```sh
npm install
npm run reproduce
```

With Remix `3.0.0-rc.5`, the invalid `bad name` line throws from `Headers.append()` instead of being ignored while the valid lines are retained.
