function makeRequest(data, callback) {
    $.ajax({
        url: '/jsonrpc',
        type: 'post',
        dataType: 'JSON',
        success: function (data) {
            console.log('DATA RECEIVED:');
            console.log(data);
            callback(data.result);
        },
        error: function (error) {
            console.log('ERROR RETRIEVING DATA');
            console.log(error);
            callback();
        },
        data: { json: JSON.stringify(data) }
    });
}

/* Returns a an array with all listings for sale */
function getAllListings(callback) {
    var requestPayload = {
        "jsonrpc": "2.0",
        "id": "id",
        "method": "get_listings",
        "params": {
            "listing_timestamp": null,
            "seller_email": null,
            "listing_type": null,
            "listing_price_min": 0,
            "listing_price_max": 999999
        }
    }

    makeRequest(requestPayload, callback);
}


function getAllUsers(callback) {
    var requestPayload = {
        "jsonrpc": "2.0",
        "id": "id",
        "method": "get_users",
        "params": {
            "user_email": null
        }
    }

    makeRequest(requestPayload, callback);

}