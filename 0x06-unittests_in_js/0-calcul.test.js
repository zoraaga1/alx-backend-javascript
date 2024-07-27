const assert = require('assert');
const calculateNumber = require('./0-calcul'); // Import the function

describe('calculateNumber', function() {
    it('should return 5 for inputs 2.4 and 2.6', function() {
        assert.strictEqual(calculateNumber(2.4, 2.6), 5);
    });

    it('should return 6 for inputs 3.5 and 2.5', function() {
        assert.strictEqual(calculateNumber(3.5, 2.5), 6);
    });

    it('should return 0 for inputs -0.4 and 0.4', function() {
        assert.strictEqual(calculateNumber(-0.4, 0.4), 0);
    });

    it('should return -1 for inputs -0.6 and -0.5', function() {
        assert.strictEqual(calculateNumber(-0.6, -0.5), -1);
    });

    it('should return 1 for inputs 0.4 and 0.7', function() {
        assert.strictEqual(calculateNumber(0.4, 0.7), 1);
    });
});
