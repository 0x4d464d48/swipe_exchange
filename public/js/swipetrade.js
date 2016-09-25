var activateTab = function(id) {
  // remove all is-active classes from tabs
  $('a.mdl-layout__tab').removeClass('is-active');
  // activate desired tab
  $('a[href="' + id + '"]').addClass('is-active');
  // remove all is-active classes from panels
  $('.mdl-layout__tab-panel').removeClass('is-active');
  // activate desired tab panel
  $("div"+id).addClass('is-active');
}

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
  
  var post_new_tabs = {
    1: "#post-new",
    2: "#post-new-upload-img",
    3: "#post-new-set-price",
    4: "#post-new-set-description",
    5: "#post-new-overview"
  }
  
  $("#add").click(function() {
    console.log("Clicked!");
    activateTab(post_new_tabs[1]);
  });
    
  $(".swipetrade-button-post-new").click(function() {
    console.log("Woohoo" + $(this).text());
    activateTab(post_new_tabs[2]);
  });

  $("#swipetrade-upload-img-input").click(function() {
    console.log("Woohoo2");
    openFileOption();
  });
  $("#swipetrade-button-upload-img").click(function() {
    console.log("Woohoo2");
    activateTab(post_new_tabs[3]);
  });
  $("#swipetrade-button-upload-img-back").click(function() {
    console.log("Woohoo2");
    activateTab(post_new_tabs[1]);
  });
  
  $("#swipetrade-button-set-price").click(function() {
    console.log("Woohoo3");
    activateTab(post_new_tabs[4]);
  });
  $("#swipetrade-button-set-price-back").click(function() {
    console.log("Woohoo3");
    activateTab(post_new_tabs[2]);
  });
  
  $("#swipetrade-button-set-description").click(function() {
    console.log("Woohoo3");
    activateTab(post_new_tabs[5]);
  });
  $("#swipetrade-button-set-description-back").click(function() {
    console.log("Woohoo3");
    activateTab(post_new_tabs[3]);
  });
  
  $("#swipetrade-button-overview").click(function() {
    console.log("Done, activating post");
    activateTab("#post");
  });
  $("#swipetrade-button-overview-back").click(function() {
    console.log("Woohoo3");
    activateTab(post_new_tabs[4]);
  });
  
  /* Floating Menu */
  $(".swipetrade-floating-menu").click(function(e) {
    // This prevents the <a> from actually opening a new page
    e.preventDefault();
    var href = $(this).attr("href");
    console.log("Derek: Floating menu item #" + $(this).attr('id') + " clicked! Linking to href " + href);
    activateTab(href);
  })
    
});