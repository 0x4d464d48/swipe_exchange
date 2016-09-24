var source = new EventSource('sse?username=youwin');
console.log('lets light this candle');


function onMessageHandler(event) {
   console.log('HI!');
   console.log(event.data);//just for debug purposes
}

source.onopen = function() {
    console.log('Im open!');
}

source.onmessage = function(event) {
    console.log('a message!');
    console.log(event);
}

source.onerror = function(error) {
    console.log(error);
}

source.onclose = function(event) {
    console.log(event);
}