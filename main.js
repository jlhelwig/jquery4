

$(document).ready(function(){
// Q1
  $('#submitBtn').click(function () {
          var text = $("#textInput").val();
          console.log(text);
          $("<h3>" + text + "</h3>").insertAfter("#submitBtn");
      })

// q2

$(".chex").click(function(){
  $("h2").toggleClass("hidden");
});


// q3 cats

$(".table-striped").append("<tr><td>Felicity</td><td>19</td><td>Hangry</td></td>");


















  });
