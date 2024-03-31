(() => { //EX - 1
  function calculateOperation(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  }

  let operation1Result = calculateOperation(1, 2, 3);
  console.log(`Operation 1 Result: ${operation1Result}`);
  let operation2Result = calculateOperation(4, 5, 6);
  console.log(`Operation 2 Result: ${operation2Result}`);

  // EX - 2
  function calculateArea(shape: string, dimension1: number, dimension2?: number): number {
    if (shape === 'rectangle') {
      return dimension1 * (dimension2 || 0);
    } else if (shape === 'circle') {
      return Math.PI * dimension1 * dimension1;
    } else {
      return 0;
    }
  }

  let rectangleArea = calculateArea('rectangle', 5, 6);
  console.log(`Rectangle Area: ${rectangleArea}`);
  let circleArea = calculateArea('circle', 7);
  console.log(`Circle Area: ${circleArea}`);

  // EX - 3
  function validate(input: string, type: string): boolean {

    if (type === 'email') {
      return input.includes('@');
    } else if (type === 'username') {
      return input.length >= 5;
    } else {
      return false;
    }
}

  let isEmailValid = validate('test@example.com', 'email');
  console.log(`Is Email Valid: ${isEmailValid}`);
  let isUsernameValid = validate('testUser', 'username');
  console.log(`Is Username Valid: ${isUsernameValid}`);
})();
