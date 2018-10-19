$(document).ready(function() {
 $("#survey").submit(function(event) {
   event.preventDefault();
   var endInput = $("input:radio[name=end-type]:checked").val();
   var grammarInput = $("input:radio[name=grammar-type]:checked").val();
   var colorInput = $("input:radio[name=color-type]:checked").val();
   var phoneInput = $("input:radio[name=phone-type]:checked").val();
   var beverageInput = $("input:radio[name=beverage-type]:checked").val();

   var ruby = 0;
   var php = 0;
   var java = 0;
   var css = 0;
   var csharp = 0;

   if (endInput === "front") {
     css += 1;
   } else if (endInput === "back") {
     php += 1; java += 1; csharp += 1; ruby += 1;
   }

   if (grammarInput === "letters") {
     css += 1; php += 1; csharp += 1;
   } else if (grammarInput === "words") {
     java += 1; ruby += 1;
   }

   if (colorInput === "rainbow") {
     css += 1; ruby += 1;
   } else if (colorInput === "black-and-white") {
     java += 1; php += 1; csharp += 1;
   }

   if (phoneInput === "android") {
     java += 1; css += 1; csharp += 1;
   } else if (phoneInput === "iphone") {
     ruby += 1; php += 1;
   }

   if (beverageInput === "coffee") {
     java += 1; php += 1;
   } else if (beverageInput === "tea"){
     csharp += 1; css += 1; ruby += 1;
   }

   $(".result-block").show();
   if (java+csharp+css > ruby+php && java+csharp+css > 7) {
     $(".result").hide();
     $("#java-path").fadeIn();
     $("#css-path").fadeIn();
     $("#csharp-path").fadeIn();
   } else if (csharp+css+ruby > php+java && csharp+css+ruby > 7) {
     $(".result").hide();
     $("#ruby-path").fadeIn();
     $("#css-path").fadeIn();
     $("#csharp-path").fadeIn();
        } else if (css+ruby+php > java+csharp && css+ruby+php > 7) {
     $(".result").hide();
     $("#ruby-path").fadeIn();
     $("#php-path").fadeIn();
     $("#css-path").fadeIn();
   } else if (ruby+php+java > csharp+css && ruby+php+java > 6) {
     $(".result").hide();
     $("#ruby-path").fadeIn();
     $("#php-path").fadeIn();
     $("#java-path").fadeIn();
   } else if (php+java+csharp > css+ruby && php+java+csharp > 6) {
     $(".result").hide();
     $("#php-path").fadeIn();
     $("#java-path").fadeIn();
     $("#csharp-path").fadeIn();
   }
  });
});
