$(document).ready(function(){
  $("form input[type=\"button\"]").click(function(){
    var newCard = "<div class=\"card\">";
    newCard += "<h3 class=\"front\">" + $("form input[id=\"first_name\"]").val() + " " + $("form input[id=\"last_name\"]").val() + "</h3>";
    newCard += "<p class=\"front\">" + $("form input[id=\"phone\"]").val() + "</p>";
    newCard += "<p class=\"back\">" + $("form textarea").val() + "</p>";
    newCard += "</div>";
    $(".card_container").append(newCard);
    $(".card_container .card").last().click(function(){
      $($(this).children(".back")).toggle(0);
      $($(this).children(".front")).toggle(0);
    });
  });
});
