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
    it('should return 0 if arg undefined', () => {
        expect(calculator.add()).equal(0);
    });
    it('should return 6 if arg "1,2,3"', () => {
        expect(calculator.add('1,2,3')).equal(6);
    });
    it('should return 5 if arg " ,2,3"', () => {
        expect(calculator.add(' ,2,3')).equal(5);
    });
    it('should return 45 if arg "1,2,3,4,5,6,7,8,9"', () => {
        expect(calculator.add('1,2,3,4,5,6,7,8,9')).equal(45);
    });
    it('should return 6 if arg "1\\n2,3"', () => {
        expect(calculator.add('1\n2,3')).equal(6);
    });
    it('should return 1 if arg "1,\\n"', () => {
        expect(calculator.add('1,\n')).equal(1);
    });
    it('should accept any splitter if input template like //<splitter>\\n[numbers…] and return 3 if arg "//<;>\\n1;2"', () => {
        expect(calculator.add('//<;>\n1;2')).equal(3);
    });
    it('should throw an Error if negative numbers and return all negative numbers', () => {
        expect(calculator.add.bind(calculator, '-1,1,-2')).to.throw(' -1 -2');
    });
    it('should ignore numbers greater than 1000 and return 4 if arg "1,1000,3,5000"', () => {
        expect(calculator.add('1,1000,3,5000')).equal(4);
    });
    it('should accept any length of splitter and return 6 if arg "//<ggg>\\n1ggg2ggg3"', () => {
        expect(calculator.add('//<ggg>\n1ggg2ggg3')).equal(6);
    });
    it('should accept different splitters in one input template "//<разделитель1><разделитель2>\\n" and return 6 if arg "//<*><%>\\n1*2%3"', () => {
        expect(calculator.add('//<*><%>\n1*2%3')).equal(6);
    });
    it('should accept many many splitters in one input template "//<разделитель1><разделитель2>\\n" and return 15 if arg "//<*><%><ggg><tttttttttttttttttttt>\\n1*2%3ggg4ggg5tttttttttttttttttttt6', () => {
        expect(calculator.add('//<*><%><ggg><tttttttttttttttttttt>\n1*2%3ggg4ggg5tttttttttttttttttttt6')).equal(15);
    });
});