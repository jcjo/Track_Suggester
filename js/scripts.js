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







 });
});
