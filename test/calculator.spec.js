const chai = require('chai');
const should = chai.should;
const expect = chai.expect;
const calculator = require('../src/calculator');
describe('testing calculator', () => {
    it('should have property add', () => {
        expect(calculator).to.have.property('add');
    });
    it('property "add" should be a function', () => {
        expect(calculator.add).to.be.a('function');
    });
});

describe('testing calculator.add(numbers)', () => {
    it('should return 0 if argument is undefined', () => {
        expect(calculator.add()).equal(0);
    });
    it('should return 6 if argument "1,2,3"', () => {
        expect(calculator.add('1,2,3')).equal(6);
    });
    it('should return 5 if args " ,2,3"', () => {
        expect(calculator.add(' ,2,3')).equal(5);
    });
    it('should return 45 if args "1,2,3,4,5,6,7,8,9"', () => {
        expect(calculator.add('1,2,3,4,5,6,7,8,9')).equal(45);
    });
    it('should return 6 if args "1\\n2,3"', () => {
        expect(calculator.add('1\n2,3')).equal(6);
    });
    it('should return 1 if args "1,\\n"', () => {
        expect(calculator.add('1,\n')).equal(1);
    });

});