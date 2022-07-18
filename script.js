setInterval(showTime, 10000);
function showTime() {
    let time = new Date();
    let seconds = time.getSeconds();
    let minute = time.getMinutes();
    let hour = time.getHours();
    let AP="AM"

    if (hour>12){
        hour=hour-12;
        AP="PM";
    }
    if (hour==0){
        hour=12;
        AP="AM";
    }

    hour=hour<10?"0"+hour:hour;
    minute=minute<10?"0"+minute:minute;
    seconds=seconds<10?"0"+seconds:seconds;
    
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("AM-PM").innerHTML = AP;
}
showTime();