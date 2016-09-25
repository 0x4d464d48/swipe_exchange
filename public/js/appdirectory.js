// Use this file to hide and show items in the app based on the items the user
// interacts with.

function showSellerProfile(email) {
    $('.swipe').hide();
    $('#sellerprofile').show();
}

function exitSellerProfile(email) {
    $('#sellerprofile').hide();
    $('.swipe').show();
}



