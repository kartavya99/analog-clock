var sec = 0;
var min = 0;
var hour = 0;
// var now = new Date();
// console.log(now);

setInterval(updateClock, 1000);

function updateClock() {
    let now = new Date();
    // console.log(new Date);
    
    sec = now.getSeconds() * 6; 
    // console.log(now.getSeconds);
    // 360 degree divided by 60 seconds = 6 and therefore each second, second hand moved 6 degrees

    min = now.getMinutes() * 6;
    // console.log(now.getMinutes);
    // 360 divided by 60 minuets = 6  and therefore each minute, minute hand moves 6 degree

    hour = now.getHours() * 30 + Math.round(min/12);
    // console.log(now.getHours);
    // 360 divided by 12 hours = 30  and therefore each hour, hour hand moves 30 degree

    document.getElementById("second-hand").style.transform = "rotate(" + sec + "deg)";
    document.getElementById("minute-hand").style.transform = "rotate(" + min + "deg)";
    document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";

}

updateClock();
// by calling the updateClock function - clock will load with current time straight away.
