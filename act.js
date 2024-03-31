function displayNumber() {
    var n = parseInt(document.getElementById("numberInput").value);
    var output = "";

    if (n > 0 && n <= 100) {
        for (var c = 1; c <= n; c++) {
            output += c + "<br>";
        }
    }
    else if (n <= 0) {
        output = "Please enter a number greater than 0.";
    } else {
        output = "Please enter a number less than or equal to 100"
    }
    document.getElementById("output").innerHTML = output
}