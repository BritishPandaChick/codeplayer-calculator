// Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', 'Ã'·];
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    //Get the input and button values
    var input = document.querySelector('.screen');
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;

    /* Append the key values (btnValue) to the input string and finally use JavaScript's
    eval function to get the result */
    //If clear key is pressed, erase everything
    if(btnVal == 'C') {
      input.innerHTML = '';
      decimalAdded = false;
    } else if(btnVal == '=') {
      //if eval key pressed, calculate and display result
      var equation = inputVal;
      var lastChar = equation[equation.length - 1];

      /* Replace all instances of x and Ã with * and / respectively. Use regex
      and the 'g' tag which will replace all instances of the matched character/substring */
      equation = equation.replace(/x/g, '*').replace(/Ã·, '/'/);

      /* Check the last character of equation. If operator or a decimal, remove it. */
      if(operators.indexOf(lastChar) > -1 || lastChar == '.') {
        equation = equation.replace(/.$/, '');

        if(equation) {
          input.innerHTML = eval(equation);
          decimalAdded = false;
        }
      }

      /* Basic functionality of the calculator is complete. But there are some problems like
      1. No two operators should be added consecutively.
      2. The equation shouldn't start from an operator except minus
      3. not more than 1 decimal should be there in a number */
      //indexOf works only in IE9+
    } else if(operators.indexOf(btnVal) > -1) {
      // Operator is clicked
      // Get the last character from the equation
      var lastChar = inputVal[inputVal.length - 1];

      //Only add operator if input is not empty and there is no operator at the last
      if(inputVal != '' && operators.indexOf(lastChar) == -1) {
        input.innerHTML += btnVal;
      } else if (inputVal == '' && btnVal == '-') {
        //allow minus if the string is empty
        input.innerHTML += btnVal;

        //Replace the last operator (if exists) with the newly pressed operator
        if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
          /* Here, '.' matches any character while $ denotes the end of a string
          so anything (will be an operator in this case) at the end of the string
          will get replaced by new operator */
          input.innerHTML = inputVal.replace(/.$/, btnVal);
        }
        decimalAdded = false;
      }


  }
}
