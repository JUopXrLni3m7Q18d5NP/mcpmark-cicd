// This file contains intentional linting errors to demonstrate the workflow

const unusedVariable = 'This variable is not used';

class ExampleClass {
  constructor() {
    this.property = "double quotes should be single";
  }

  exampleMethod() {
    console.log('This is a console log that should only warn');
    let badSemicolon = "missing semicolon"
    return `This uses template literals which might not be preferred`;
  }
}

// Missing closing brace for the class