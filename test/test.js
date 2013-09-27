var np = require('../');
var assert = require('assert');

describe('path normalizer', function() {
  it('should normalize a trailing slash away', function() {
    assert.equal(np('/path/'), '/path');
  });
  it('should add a leading slash', function() {
    assert.equal(np('path'), '/path');
  });
  it('should add a leading slash while removing a trailing slash', function() {
    assert.equal(np('path/'), '/path');
  });
  it('should remove a trailing slash on a long path', function() {
    assert.equal(np('/path/and/stuff/'), '/path/and/stuff');
  });
  it('should add a leading slash on a long path', function() {
    assert.equal(np('path/and/stuff'), '/path/and/stuff');
  });
  it('should add a leading slash and remove trailing slash on a long path', function() {
    assert.equal(np('/path/and/stuff/'), '/path/and/stuff');
  });
  it('should normalize an empty path to nothing', function() {
    assert.strictEqual(np('/'), '');
  });
});
