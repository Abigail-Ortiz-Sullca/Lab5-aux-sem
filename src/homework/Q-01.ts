(() => {
  // Lista de emails de usuarios de Meta-X
  const userEmails = [
    "email1@gmail.com", 
    "email2@gmail.com", 
    "email3@gmail.com"
  ];
  console.log(userEmails);

  // Lista de compras de un carrito
  const shoppingCart = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];
  console.log(shoppingCart);
  
  // Función para sumar 3 a un número y retornarlo
  const addThree = (num: number): number => {
    return num + 3;
  }

  console.log(addThree(2));
  
  // Función para capitalizar una palabra pasada por parámetros
  const capitalize = (word: string): string => {
    const lowerCaseWord = word.toLowerCase();    
    const capitalizedWord = lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1);
    return capitalizedWord;
  }
  console.log(capitalize("capricorn"));

  // Variable que alerta en caso de que algún evento suceda
  let alertEvent = false;

  function handleEvent() {
    let button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alertEvent = true;
            console.log('¡Alerta! El evento ha ocurrido.');
        });
    }
  }
  handleEvent();

  // Variable que se encarga de verificar si un usuario puede acceder o no
  const canAccess = true;
  function welcomeUser(canAccess: boolean) {
    if(canAccess) {
      console.log('Welcome');
    } else {
      console.log('Access denied');
    }
  }
  welcomeUser(canAccess);

  // Función para hallar el promedio de 3 números
  function calculateAverage(num1: number, num2: number, num3: number): number {
    let sum = num1 + num2 + num3; 
    let average = sum / 3; 
    return average; 
  }

  let average = calculateAverage(10, 20, 30);
  console.log(`El promedio es ${average}.`);

  // Variable que almacena el valor de PI
  const PI = 3.141592653589793;
  console.log(`El valor de PI es ${PI}.`);

  // Variable que controla si un archivo es modificable 
  const isFileEditable = false;
  if(isFileEditable) console.log('edit this file?');

  // Variable para almacenar el valor de e
  const e = Math.E;
  console.log(e);
})();
