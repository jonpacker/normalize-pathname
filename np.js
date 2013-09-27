var normalize = require('path').normalize;
module.exports = function normalizePathname(pathname) {
  return normalize('/' + (pathname || '')).replace(/\/$/, "");
};
