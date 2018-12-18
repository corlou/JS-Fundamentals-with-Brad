

/* Number
let number1 = "35"; //no quotes = number, quotes = string
let number2 = "40"; //adding quotes around the numbers and adding them together concatonates. Results in 3540

alert('My favorite number is ' +number1);
*/

/* Variables:
  Can contain: letters, numbers, underscores, dollar signs
  Start with a letter
  Case sensitive
*/

// String

/*Array
  used to store multiple values in a single variable*/
  //let colors = ['red', 'blue' , 'green'];
  //alert(colors[1]);

  /*let colors = new Array ('red', 'yellow', 'orange');
  colors.push('purple');
  alert(colors[3]);*/

  //let numbers = [5,77,6,'Seven'];
  
  /*alert(numbers.length); //how many values are in the array (there are 4)*/

  //alert(numbers.sort());

  //alert(numbers.reverse());


/* Object
  Objects are variables too. But objects can contain many values.
*/

//Loops = For, While, and For Each (for each is built to work with Arrays)

  //For
    /*for(let i = 0; i <= 20; i++){
      console.log('I love the number' +i);
    }
    */
  //While
    /*let i = 0;
    while(i < 10) {
      console.log(i);
      i++;
    };
    */

  //For Each
    /*let numbers = [33,54,76,34,6];
      numbers.forEach(function(number){
        console.log(number);
      });
    */

//Conditionals
  
  /*let var1 = 3;
  let var2 = 4;
if( var1 == var2 || var1 == 3){
    console.log('This is true');
  } else {
    console.log('This is false');
  }
  */

  //Switch Statements in Conditionals

  let fruit = 'apple';
  //let fruit = 'bananas';
  //let fruit = 'orange';
  //let fruit = 'grapes'; = I love all other fruits will appear
  switch(fruit){
    case "banana":
      alert('I hate bananas');
      break;
    case "apple":
      alert("I love apples");
      break;
    case "orange":
      alert("oranges are ok");
      break;
    default:
      alert("I love all other fruits");
      break;

  }
