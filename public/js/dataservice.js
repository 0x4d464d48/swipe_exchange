var masterItemData = [];
var userDirectory = [];
var dennisProfileItems = [];

// Associate email with profile picture
var userImageMap = {};
var userItemMap = {};


/* Load the main page after data is received */
function loadMainPage(data) {
    masterItemData = data;
    console.log('THE MASTER ITEM ARRAY:');
    console.log(masterItemData);
    // Load the data into the web page
    $('document').ready(function() {
        for(var listing in masterItemData) {
             var currentListing = masterItemData[listing];
             if (userItemMap[currentListing.listing_seller]) {
                userItemMap[currentListing.listing_seller].push(currentListing);
             } else {
                userItemMap[currentListing.listing_seller] = [currentListing];
             }
          if(currentListing.listing_seller !== 'dennis_liulinyin@hotmail.com') {
      var listingElement =  '<div class="swipetrade-card mdl-card mdl-cell mdl-cell--4-col mdl-shadow--2dp" style="height:350px">' +
            '<div class="swipetrade-card__profile">' +
              '<img src="' + userImageMap[currentListing.listing_seller] + '" class="swipetrade-card__profile-picture">' +
            '</div>' +
            '<div class="swipetrade-card__image-container">' +
              '<div class="swipetrade-card-image" style="background-image: url(\'' + currentListing.listing_image + '\');">' +
              '</div>' +
            '</div>' +
            '<div class="swipetrade-card__main-content mdl-shadow--2dp">' +
              '<p class="swipetrade-card__cost-text">' + (currentListing.listing_price / 100).toString() + ' CAD</p>' +
              '<p class="swipetrade-card__distance-text">Within 300m</p>' +
              '<p class="swipetrade-card__item-text">' + currentListing.listing_name + '</p>' +
            '</div>' +
            '<div class="swipetrade-card__buttons mdl-shadow--3dp">' +
              '<a class="swipetrade-card__mark-for-later mdl-button mdl-js-button mdl-js-ripple-effect">' +
                  'Contact' +
              '</a>' +
              '<a class="swipetrade-card__buy mdl-button mdl-js-button mdl-js-ripple-effect">' +
                  'Buy Now' +
                '</a>' +
            '</div>' +
          '</div>';
        $('#the-main-browse-tab').append(listingElement);
        $('.swipe').append(listingElement);

          // Dennis items are in his profile
          } else {
         var profileItem = '<div class="swipetrade-card mdl-card mdl-cell mdl-cell--4-col mdl-shadow--2dp" style="height:350px">' +
          '<div class="swipetrade-card__image-container">' +
            '<div class="swipetrade-card-image" style="background-image: url(\'' + currentListing.listing_image + '\');">' +
            '</div>' +
          '</div>' +
          '<div class="swipetrade-card__main-content mdl-shadow--2dp">' +
            '<p class="swipetrade-card__cost-text">' + currentListing.listing_name + '</p>' +
            '<p class="swipetrade-card__item-text">' + currentListing.listing_description + '</p>' +
          '</div>' +
            '<a class="swipetrade-card__remove mdl-button mdl-js-button mdl-js-ripple-effect">' +
                 'Remove' +
            '</a>' +
        '</div>';

            $('#demo-profile').append(profileItem);          
          }
          dennisProfileItems.push(profileItem);

        }
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

    });
}

function populateUserDirectory(data) {
    userDirectory = data;

    for (var user in userDirectory) {
      var currentUser = userDirectory[user];
      userImageMap[currentUser.user_email] = currentUser.user_image;

      // Make Dennis' user profilel
      if(currentUser.user_email == 'dennis_liulinyin@hotmail.com') {
        console.log('Found dennis!'); 
      }
    }

          var profileHead = '<div class="swipetrade-card mdl-card mdl-cell mdl-cell--4-col mdl-shadow--2dp" style="height:350px; margin: auto; width:100%">' +
            '<div class="swipetrade-card__profile-seller">' +
              '<img src="http://i.imgur.com/uJ68eo2.jpg" class="swipetrade-card__profile-picture-seller" onclick="showSellerProfile()">' +
            '</div>' +
              '<p class="swipetrade-card__profile-name">Dennis Liu</p>' +
              '<p class="swipetrade-card__edit-profile">EDIT YOUR INFO</p>' +
            '<div class="swipetrade-card__buttons mdl-shadow--3dp">' +
              '<a class="swipetrade-card__your-listings mdl-button mdl-js-button mdl-js-ripple-effect">' +
                  'Your Listings' +
                '</a>' +
              '<a class="swipetrade-card__favourites mdl-button mdl-js-button mdl-js-ripple-effect">' +
                  'Bookmarks' +
                '</a>' +
            '</div>' +
          '</div>';
             $('#demo-profile').append(profileHead);

    console.log('USER DIRECTORY:');
    console.log(userDirectory);
    console.log('USER PICTURES:');
    console.log(userImageMap);

    // Load items with images
    getAllListings(loadMainPage);
}

getAllUsers(populateUserDirectory);