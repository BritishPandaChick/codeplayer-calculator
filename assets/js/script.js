// Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', 'Ã'·];
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    // Get the input and button values
    var input = document.querySelector('.screen');
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;

    /* Append key values (btnValue) to the input string and finally use javascript's
    eval function to get the result */
    // If clear key is pressed, erase everything
    if(btnVal == 'C') {
      input.innerHTML = '';
      decimalAdded = false;
    }

    //If eval key pressed, calculate and display the result
    else if(btnVal == '=') {
      var equation = inputVal;
      var lastChar = equation[equation.length - 1];

      /* Replace all instances of x and Ã with * and / respectively. This can be
      done easily using regex and the 'g' tag which will replace all instances of
      the matched character/substring. */
      equation = equation.replace(/x/g, '*').replace(/Ã·g, '/'/);

      /* Final thing check last character of the equation. If it's an operator or
      a decimal, remove it */
      if(operators.indexOf(lastChar) > -1 || lastChar == '.') {
        equation = equation.replace(/.$/, '');

        if(equation) {
          input.innerHTML = eval(equation);
          decimalAdded = false;
        }

        /* Basic functionality of the calculator is complete. But there are some problems like
        1. No two operators should be added consecutively.
        2. The equation shouldn't start from an operator except minus
        3. not more than 1 decimal should be there in a number
        Fix issues using some simple checks */

        //indexOf works only in IE9+
        else if(operators.indexOf(btnVal) > -1) {
          // operator is clicked
          // get the last character from the equation
          var lastChar = inputVal[inputVal.length - 1];

          // Only add operator if input is not empty and there is no operator at the last
          if(inputVal != '' && operators.indexOf(lastChar) == -1) {
            input.innerHTML += btnVal;
          }

          //allow minus if the string is empty 
        }

      }
    }

  }
}
