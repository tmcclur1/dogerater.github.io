window.addEventListener('load', function() {
    document.getElementById("left-image").onclick = function(event) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("demo").innerHTML = xhttp.responseText; // not helpful code
            }
        };
        xhttp.open("POST", "_ah/api/handleClick", true);
        xhttp.send();
    };
});

window.addEventListener('load', function() {
    document.getElementById("right-image").onclick = function(event) {
        alert("This was my senior quote");
    };
});
