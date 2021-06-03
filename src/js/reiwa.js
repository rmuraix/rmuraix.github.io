function reiwa() {
    var today = new Date();
    var year = today.getFullYear;
    var two = year % 100;
    var calc = two - 18;
    var pNumber = document.getElementById("p-number");
    pNumber.innerHTML = [calc];
}