import { expect } from 'chai';
import calculateNumber from './1-calcul.js'; // Adjust path if needed

describe('calculateNumber', () => {
  it('should return 4 for inputs 1 and 3', () => {
    expect(calculateNumber(1, 3)).to.equal(4);
  });

  it('should return 5 for inputs 1 and 3.7', () => {
    expect(calculateNumber(1, 3.7)).to.equal(5);
  });

  it('should return 5 for inputs 1.2 and 3.7', () => {
    expect(calculateNumber(1.2, 3.7)).to.equal(5);
  });

  it('should return 6 for inputs 1.5 and 3.7', () => {
    expect(calculateNumber(1.5, 3.7)).to.equal(6);
  });
});
