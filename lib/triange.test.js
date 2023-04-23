const Triangle = require('./triangle.js');

describe('Triangle', () => {
    test('should render a correct string for SVG polygon with the given color', () => {
      const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>';
      const triangle= new Triangle();
      triangle.setColor("blue");
      expect(triangle.render()).toEqual(expectedSVG);
    });
});