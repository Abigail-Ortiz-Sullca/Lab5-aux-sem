(() => {
  //la clase Person,no se esta utilizando en ninguna parte del código original, 
  //esto se considera una mala práctica porque puede llevar a código innecesario
  class Person {
    constructor(private name: string, private age: number) {}

    getName(): string {
      return this.name;
    }

    setName(name: string): void {
      this.name = name;
    }

    getAge(): number {
      return this.age;
    }

    setAge(age: number): void {
      this.age = age;
    }
  }

  // Instanciamos la clase Person para evitar el error
  const personInstance = new Person('John Doe', 30);
  console.log(personInstance.getName()); 

  // Las funciones deben usar camelCase y ser descriptivas
  function weirdFunction() {
    const a = 5;
    const b = 333; 
    const result = a + b;
    console.log('asd');
    const newResult = result * 10;
    const arr = [1, 2, 3, 4, 5];
    const b2 = arr.map(element => {
      return element * newResult;
    });
    console.log(b2);
  }

  weirdFunction();

})();
