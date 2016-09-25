// Use this file to hide and show items in the app based on the items the user
// interacts with.

function showSellerProfile(email) {
    console.log('THE EMAIL GIVEN:');
    console.log(email);
    $('.swipe').hide();
    $('#sellerprofile').empty();
    $('#sellerprofile').show();
    $('#sellerprofile').append('<section class="swipetrade-main-section section--center mdl-grid mdl-shadow--2dp" id="section-seller"></section>');
    $('#section-seller').append(
          '<div class="swipetrade-card mdl-card mdl-cell mdl-cell--4-col mdl-shadow--2dp" style="height:300px;width:100%" >' +
            '<img onclick="exitSellerProfile()" class="exit-profile"></button>' +
            '<div class="swipetrade-card__profile-seller">' +
              '<img src="' + userImageMap[email] + '" class="swipetrade-card__profile-picture-seller">' +
            '</div>' +
            '<div id="seller-rating"></div>' +
            '<div class="swipetrade-card__main-content">' +
            '</div>' +
              '<div style="height:100px">' +
              '</div>' +
              '<p class="swipetrade-card__item-seller-name">' + userNameMap[email][0] + ' ' + userNameMap[email][1] + '</p>' +
            '<div class="swipetrade-card__button-seller">' +
              '<a class="swipetrade-card__contact mdl-button mdl-js-button mdl-js-ripple-effect">' +
                  'Contact' +
                '</a>' +
            '</div>' +
          '</div>'
    );

    var items = userItemMap[email];

    for(var item in items) {
        var currentItem = items[item];
        $('#section-seller').append(
          '<div class="swipetrade-card mdl-card mdl-cell mdl-cell--4-col mdl-shadow--2dp" style="height:350px">' +
            '<div class="swipetrade-card__image-container">' +
              '<div class="swipetrade-card-image" style="background-image: url(\'' + currentItem.listing_image + '\');">' +
              '</div>' +
            '</div>' +
            '<div class="swipetrade-card__main-content mdl-shadow--2dp">' +
              '<p class="swipetrade-card__cost-text">' + (currentItem.listing_price / 100).toString() + '</p>' +
              '<p class="swipetrade-card__item-text">' + currentItem.listing_description + '</p>' +
            '</div>' +
            '<div class="swipetrade-card__buttons mdl-shadow--3dp">' +
              '<a class="swipetrade-card__mark-for-later mdl-button mdl-js-button mdl-js-ripple-effect">' +
                  'Contact' +
                '</a>' +
              '<a class="swipetrade-card__buy mdl-button mdl-js-button mdl-js-ripple-effect">' +
                  'Buy Now' +
                '</a>' +
            '</div>' +
          '</div>'
        );
    }
}

function exitSellerProfile(email) {
    $('#sellerprofile').hide();
    $('.swipe').show();
}



