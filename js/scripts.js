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

   $(".result-area").hide();
   if (ruby >= 3)  {
     $("#ruby-path").show();
   }
   if (php >= 3) {
     $("#php-path").show();
    }
   if (java >= 3) {
     $("#java-path").show();
    }
   if (css >= 2) {
     $("#css-path").show();
   }
   if (csharp >= 3) {
     $("#csharp-path").show();
   }

  });
});
