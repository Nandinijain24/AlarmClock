let playSound = true;
let check;

setInterval(() => {
    let time = new Date();
    timing.innerHTML = time.toLocaleTimeString();
}, 1000);

function setAlarm() {
    let h = document.getElementById('hours').value;
    let m = document.getElementById('min').value;
    settime.innerHTML = h + ":" + m + ":00";
    console.log("");
}

if (playSound) {
    function startAlarm() {
        check = setInterval(() => {
            let alarmtime = document.getElementById('settime').innerHTML;
            let [alarmhours, alarmminute] = alarmtime.split(":");
            let systemTime = new Date();
            let systemhours = systemTime.getHours();
            let systemminute = systemTime.getMinutes();

            if (systemhours > 12) {
                systemhours = systemhours - 12;
            }

            // Compare both hours and minutes
            if (parseInt(alarmhours) == systemhours && parseInt(alarmminute) == systemminute) {
                alarmsound.play();
                console.log("Alarm started!");
            }
        }, 1000); // Check every second
    }
}

document.getElementById('stopbtn').onclick = function () {
    playSound = false;
    alarmsound.pause();
    alarmsound.currentTime = 0;
    alert("Aalarm will ring in 6 seconds");
    clearInterval(check);
    document.getElementById('settime').innerHTML = "";
    console.log("Alarm stopped!");
    setTimeout(() => {
        alarmsound.play();
    }, 6000);
};
startAlarm();

document.getElementById('resetbtn').onclick =function(){
   let h= document.getElementById('hours').value="";
   let m= document.getElementById('min').value="";
    settime.innerHTML = h + ":" + m + ":00";
    console.log("alarm reset");
}