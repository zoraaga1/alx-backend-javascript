// 2-calcul_chai.test.js
const chai = require('chai');
const calculateNumber = require('./1-calcul'); // Ensure this path is correct

const { expect } = chai;

describe('calculateNumber', function() {
    it('should return 4 for inputs 1 and 3', function() {
        expect(calculateNumber(1, 3)).to.equal(4);
    });

    it('should return 5 for inputs 1 and 3.7', function() {
        expect(calculateNumber(1, 3.7)).to.equal(5);
    });

    it('should return 5 for inputs 1.2 and 3.7', function() {
        expect(calculateNumber(1.2, 3.7)).to.equal(5);
    });

    it('should return 6 for inputs 1.5 and 3.7', function() {
        expect(calculateNumber(1.5, 3.7)).to.equal(6);
    });
});
