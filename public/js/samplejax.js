function testPing() {
    var data_file = "http://www.tutorialspoint.com/json/data.json";
    var http_request = new XMLHttpRequest();
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
        success: function(data)  {
            console.log(data);
        },
        error: function(error) {
            console.log(pingRequest);
            console.log(error);
        },
        data: { json: JSON.stringify(pingRequest.json) }});
}

// Test the ping forever
setInterval(testPing, 1000);