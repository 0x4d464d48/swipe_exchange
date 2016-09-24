$(document).ready(function(){
    console.log("Hello!")
    
    new jQueryCollapse($(".swipetrade-collapsible"), {
        open: function() {
          this.slideDown(150);
        },
        close: function() {
          this.slideUp(150);
        }
      });
    
  $("#swipetrade-filter-input").keyup(function(event) {
    console.log("Input contents: %s", $(this).val());
  });
    
});