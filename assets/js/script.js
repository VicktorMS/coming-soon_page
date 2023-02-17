var countDownDate = new Date("Nov 26, 2023 10:37:25").getTime();
console.log(countDownDate)

var x = setInterval(function() {
    var nowDate = new Date().getTime();
    var distance = countDownDate - nowDate


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("secTimer").innerText = seconds
    document.getElementById("minTimer").innerText = minutes
    document.getElementById("hoursTimer").innerText = hours
    document.getElementById("daysTimer").innerText = days
    if(distance < 0){
        clearInterval(x);
    }
})