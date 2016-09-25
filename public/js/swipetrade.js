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
    $("#sellerprofile").hide();
    console.log("Hello!");
    
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
  $(".swipetrade-floating-menu-href").click(function(e) {
    // This prevents the <a> from actually opening a new page
    e.preventDefault();
    var href = $(this).attr("href");
    console.log("Derek: Floating menu item #" + $(this).attr('id') + " clicked! Linking to href " + href);
    activateTab(href);
    $('.swipe').hide();
    $('#sellerprofile').hide();
    
    console.log("Derek Hack " + $("#swipetrade-view-icon").html());
  });
  
  $("#swipetrade-floating-menu-view").click(function(e) {
    var current_active = $('.is-active').attr('id');
    // console.log("Derek: Currently active: " + current_active);
    // console.log($(this));
    
    if (current_active === "browse") {
      // console.log("Derek: Changing href to swipe");
      $("#swipetrade-floating-menu-view").attr("href", "#swipe");
      $("#swipetrade-view-icon").html("view_carousel");
      
    } else {
      // console.log("Derek: Changing href to browse");
      $("#swipetrade-floating-menu-view").attr("href", "#browse");
      $("#swipetrade-view-icon").html("view_module");
      
      $('.swipe').show();
      $('.swipe').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
      
    }
  });
    
  
  $("#swipetrade-floating-menu-filter").click(function(e) {
    // This prevents the <a> from actually opening a new page
    e.preventDefault();
    console.log("Derek: filter");
    var overlayStatus = $("#swipetrade-overlay").css("display");
    if (overlayStatus === "none") {
      $("#swipetrade-overlay").fadeIn();
    } else {
      $("#swipetrade-overlay").fadeOut();
    }
  });
  $("#swipetrade-floating-menu-overlay-exit").click(function(e) {
    e.preventDefault();
    $("#swipetrade-overlay").fadeOut();
  });
  
  $("#swipetrade-filter-input-location").click(function(e) {
    // This prevents the <a> from actually opening a new page
    e.preventDefault();
    console.log("Derek: filter");
    $("#swipetrade-overlay-location").fadeIn();
  });
  
  $("#swipetrade-filter-input-location").click(function(e) {
    // This prevents the <a> from actually opening a new page
    e.preventDefault();
    console.log("Derek: filter");
    $("#swipetrade-overlay-location").fadeIn();
  });
  
  $("#swipetrade-filter-input-category").click(function(e) {
    // This prevents the <a> from actually opening a new page
    e.preventDefault();
    console.log("Derek: filter");
    $("#swipetrade-overlay-category").fadeIn();
  });
  
  $(".swipetrade-floating-menu-overlay-fakexit").click(function(e) {
    e.preventDefault();
  });

  $(".swipetrade-overlay-submenu").click(function(e) {
    e.preventDefault();
    $(this).fadeOut();
  });
  
    
});