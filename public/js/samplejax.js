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
var requestParams = [
    ['mathcurt@gmail.com', '1474746465'],
    ['derekchan1994@gmail.com', '1474746467'],
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

for (var tuple in requestParams) {
    var currentTuple = requestParams[tuple];
    console.log('Gettting request:' + currentTuple);

    var jsonData = {
        "jsonrpc": "2.0",
        "id": "id",
        "method": "create_request",
        "params": {
            "listing_timestamp": currentTuple[1],
            "buyer_email": currentTuple[0]
        }

    }

    makeRequest(jsonData);
}
