# normalize-pathname

Normalizes any pathname to the same format: one leading slash, no trailing slash.

## install

```
npm install normalize-pathname
```

## usage

```javascript
var normalizePathname = require('normalize-pathname');
console.log(normalizePathname('wibblebong/wollomombi/'));
// -> '/wibblebong/wollomombi'
```

## examples

```
/one/two/ -> /one/two
one/two   -> /one/two
one/two/  -> /one/two
one       -> /one
/one/     -> /one
one/      -> /one
/         -> (empty string)
```

