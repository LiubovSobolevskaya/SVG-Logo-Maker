class Shape{
    // Defines a "setColor" method on the class prototype
    setColor(color){
        // Sets the "color" property of the instance to the provided "color" parameter
        this.color = color;
    }
    render(){
        // Throws an error indicating that this method must be implemented by child classes
        throw new Error('Child class must implement a render() method.');
    }
}
// Export Square class to be used in other modules
module.exports = Shape;

