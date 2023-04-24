const Circle = require('./circle.js');

describe('Circle', () => {
  it('should render a correct string for circle SVG with the given color', () => {
    const expectedSVG =  '<circle cx="150" cy="100" r="80" fill="blue"/>';
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual(expectedSVG);
  });
});
