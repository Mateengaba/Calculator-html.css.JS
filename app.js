function setNumber(num) {
    var input = document.getElementById("number")
    input.value += num
    }
    
    
    function ans(){
        var inputValue = document.getElementById("number")
        var output = eval(inputValue.value)
        inputValue.value = output
        
    }
    
  
    
      // remove kar na ka lia
      
    function clearScreen() {
        var inputValue = document.getElementById("number")
        inputValue.value = " ";
    }
    
    // Single number delet karn ka lis
    
    function lastDelete() {
      var inputValue = document.getElementById("number")
      inputValue.value = inputValue.value.slice(0,-1) 
    
    }