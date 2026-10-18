# SuperHeaders nonnumeric accessor reproduction

This reproduces `SuperHeaders` numeric accessors returning `NaN` for raw header values with no parseable integer prefix. Their declared return type is `number | null`, so the expected value is `null`.

```sh
npm ci
npm run reproduce
```

The script logs all five affected accessors, then fails because `contentLength` is `NaN` instead of `null`.
