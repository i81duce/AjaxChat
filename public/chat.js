function addMessage() {
    $.post(
        "/add-message",
        { // send the parameters
            author: $("#author").val(), //# links to id in html
            text: $("#text").val()
        },
        function(data) {
            $("#text").val(""); // setting text box to empty string
        }
    );
}

function getMessages() {
    $.get(
        "/get-messages",
        function(data) {
            var messages = JSON.parse(data);
            $("#messages").empty();
            for (var i in messages) {
                var elem = $("<div>").text(messages[i].author + ": " + messages[i].text);
                $("#messages").append(elem);
            }
        }
    );
}

setInterval(getMessages, 100);