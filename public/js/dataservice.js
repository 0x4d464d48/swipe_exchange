var masterData = [];

/* Load the main page after data is received */
function loadMainPage(data) {
    masterData = data;
    console.log('THE MASTER ARRAY:');
    console.log(masterData);
    // Load the data into the web page
    $('document').ready(function() {
        for(var listing in masterData) {
             var currentListing = masterData[listing];

      var listingElement =  '<div class="swipetrade-card mdl-card mdl-cell mdl-cell--4-col mdl-shadow--2dp" style="height:350px">' +
            '<div class="swipetrade-card__profile">' +
              '<img src="images/chick.jpg" class="swipetrade-card__profile-picture">' +
            '</div>' +
            '<div class="swipetrade-card__image-container">' +
              '<div class="swipetrade-card-image" style="background-image: url(\'http://i.imgur.com/9p9tA0o.jpg\');">' +
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

        }

    });
}

getAllListings(loadMainPage);