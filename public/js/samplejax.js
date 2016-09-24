function makeRequest(data) {
    var pingRequest = {
        json: {
            jsonrpc: "2.0",
            id: "id",
            method: "ping"
        }
    };

    $.ajax({
        url: '/jsonrpc',
        type: 'post',
        dataType: 'JSON',
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(pingRequest);
            console.log(error);
        },
        data: { json: JSON.stringify(data) }
    });
}

function testPing() {
    var pingRequest = {
        json: {
            jsonrpc: "2.0",
            id: "id",
            method: "ping"
        }
    };

    $.ajax({
        url: '/jsonrpc',
        type: 'post',
        dataType: 'JSON',
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(pingRequest);
            console.log(error);
        },
        data: { json: JSON.stringify(pingRequest.json) }
    });
}

// Use to test get users
var userEmails = [
    'jeremy.quicklearner@gmail.com',
    'quicklearner@gmail.com',
    'jeremy@gmail.com',
    'jql@gmail.com'
];

// Use to test requests
var createListingTuples = [
    ['foo@bar.com',
        'selling some foo',
        'The best foo any bar ever had',
        100000000,
        'http://i.imgur.com/zuBmJRa.gif',
        'your_mom'],
    ['fasdoo@bar.com',
        'selling some asdffoo',
        'The best foo anysdfsdf bar ever had',
        10000000,
        'http://i.imgur.com/zuBmJRa.gif',
        'your_mm'],
    ['foo@ar.com',
        'sellsdfsdfing some foo',
        'The best foo any bar ever had',
        10000,
        'http://i.imgur.com/zuBmJRa.gif',
        'yourdddd_mom'],
    ['f@bar.com',
        'ssdfdelling some foo',
        'The bdfsdfsdfest foo any bar ever had',
        10,
        'http://i.imgur.com/zuBmJRa.gif',
        'yoddddddur_mom'],
    ['o@bar.com',
        'ssdfdfdfelling some foo',
        'The bestsdfsdf foo any bar ever had',
        1,
        'http://i.imgur.com/zuBmJRa.gif',
        'your_dad'],
];

// Test the ping forever
//setInterval(testPing, 1000);

// Test that you can get all users
for (var email in userEmails) {
    var currentEmail = userEmails[email];
    console.log('Gettting user:' + currentEmail);

    var jsonData = {
        "jsonrpc": "2.0",
        "id": "id",
        "method": "get_user",
        "params": {
            "user_email": currentEmail
        }
    }

    makeRequest(jsonData);
}

for (var tuple in createListingTuples) {
    var currentTuple = createListingTuples[tuple];
    console.log('Gettting request:' + currentTuple);

    var jsonData = {
        "jsonrpc": "2.0",
        "id": "id",
        "method": "create_listing",
        "params": {
            "seller_email": currentTuple[0],
            "listing_name": currentTuple[1],
            "listing_description": currentTuple[2],
            "listing_price": currentTuple[3], //$30.00
            "listing_image": currentTuple[4],
            "listing_type": currentTuple[5]
        }
    }

    makeRequest(jsonData);
}
