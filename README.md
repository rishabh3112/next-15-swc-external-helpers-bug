## NextJS 15 swc external helpers bug

### Steps to reproduce

```
npm install
npm run dev
```

It works if `npm install next@14` is done.

### Investigation

`swc_core` as used in next 15 has started adding harmony imports for `_type_of` externalHelper to non esm scripts. (Please see browserslist in package.json as well)

So, when these helpers are appended to script (like `libs/backbone.js` in this repo), it makes webpack to not be able to resolve non-harmony imports / exports (like AMD module dependency in our case).

### Possible Solutions

To solve this, we can:

1. Add a way to disable externalHelpers for specific files.
2. Disable externalHelpers throughout codebase - may cause perf issues
3. swc should not add external helper imports in scripts which can break, i.e. non harmony files.
