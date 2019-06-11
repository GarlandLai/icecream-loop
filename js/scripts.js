$(document).ready(function(){
  $("#formOne").submit(function(event) {
   //This starts the function with form one
    var kinds = ["flavor1", "flavor2", "flavor3", "flavor4", "flavor5"]

    for (index = 0; index < kinds.length; index += 1) {
      var userInput = $("#" + kinds[index]).val();
        $('.output p').append("I like " + userInput + ".")
    };
        event.preventDefault();
  });
});



   //This is a variable full of the flavors of icecream
    // kinds.forEach(function(input){
    //   var userInput = $("#" + input).val();
    //   console.log(userInput);
    //   var spaces = (", ")
    //   $(".output p").append("I like " + userInput + spaces);


      // $(".output").show();
