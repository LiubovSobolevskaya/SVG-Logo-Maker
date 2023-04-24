const Square = require('./square.js');

describe('Square', () => {
    it('should render a correct string for rectangle SVG with the given color', () => {
      const expectedSVG = '<rect x="75" y="25" width="150" height="150" fill="blue"/>';
      const square = new Square();
      square.setColor("blue");
      expect(square.render()).toEqual(expectedSVG);
    });
  });
  