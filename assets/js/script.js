//Get all the keys from the document
var keys = document.querySelectorAll("#calculator span");
var operators = ['+', '-', 'x','Ã'·];
var decimalAdded = false;

//Add onclick event to all keys and perform operations
for(var i=0; i < keys.length; i++){
  keys[i].onclick = function(e){
    //Get the input and button values
    var input = document.querySelector(".screen");
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;

    //Just append the key values (btnValue) to the input string and finally use JavaScript's eval function to get the results
    //If clear key is pressed, erase everything
    if(btnVal == "C"){
      input.innerHTML = "";
    }
    //if eval key is pressed, calculate and display the result
    if(btnVal == '=') {
      var equation = inputVal;

      //replace all instances of x and A with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
      equation = equation.replace(/x/g, '*').replace(/Ã·g, '/'/);

      if(equation) {
        input.innerHTML = eval(equation);
      }

      //Basic functionatity of the calculator is complete. But there are problems like
      //1. No two operators should be added consecutively
      //2. The equation shouldn't start from an operator except minus
      //3. not more than 1 decimal should be there in a number

      //Fix issues with simple checks
      //indexOf works only in IE9+
      if(operators.indexOf(btnVal) > -1){
        //operators is clicked
        //Only add operator if input is not empty
        if(inputVal != "&& operators.indexOf(lastChar) == -1") {
          input.innerHTML += btnVal;

        //Allow minus if the string is empty
        else if(inputVal == "&& btnVal == '-'") {
          input.innerHTML += btnVal;
        }

        //Replace the last operator (if exists) with the newly pressed operator
        if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
          //Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of the string will get replaced by new operator
          input.innerHTML = inputVal.replace/.$/, btnVal);
        }
      }
    }

    //Now only the decimal problem is left, We can solve it easily using a flag 'decimal_added' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
    else if(btnVal == '.') {
      if(!decimalAdded){
        input.innerHTML += btnVal;
        decimalAdded = true;
      }
    }
    
    //if any other key is pressed, just append it
    else {
      input.innerHTML += btnVal;
    }
  }
}
