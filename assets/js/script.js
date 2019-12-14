//Get all the keys from the document
var keys = document.querySelectorAll("#calculator span");

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
    }

    //replace all instances of x and A with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
    equation = eq
    //if any other key is pressed, just append it
    else {
      input.innerHTML += btnVal;
    }
  }
}
