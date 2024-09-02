
let h = document.getElementById('hours')
let m = document.getElementById('mins')
let AMPM = document.getElementById("period")
let hourClick = false;                // this variable handles state of running a function, helps to run a func.                
let minClick = false;              //once, when variable is false func. will run

function hoursoption() {               //handle the hours section of clock
    if (hourClick == false) {          
        console.log(hourClick)
        for (let i = 24; i >= 1; i--) {
            const houroption = document.createElement("option")
            console.log("option")

            if (i <= 12) {
                houroption.textContent = i;
                houroption.value = `${i}`
                h.appendChild(houroption)

            }
        }
    }
    hourClick = true;               //this change in variable will top running function
    console.log(hourClick)
}

function minsoption() {                ////handle the mins section of clock
    if(minClick == false){
    for (let i = 60; i >= 1; i--) {
        const minoption = document.createElement("option");
        minoption.textContent = i;
        minoption.value = `${i}`
        m.appendChild(minoption)

    }
}
minClick = true
}


let playSound = true;        //variable is true funcion will run otherwise stop funtionality,when variable is false
let check;                   

setInterval(() => {
    let time = new Date();
    timing.innerHTML = time.toLocaleTimeString();
}, 1000);

function setAlarm() {
    let hour = h.value;
    let minute = m.value;
    let AMPMvalue = AMPM.value;
    settime.innerHTML = hour + ":" + minute + ":00 " + AMPMvalue;
    playSound = true
    startAlarm()
    console.log("going to start");
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
    playSound = false;    //stop alarm
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


document.getElementById('resetbtn').onclick = function () {
    h.value = "";
    m.value = "";
    AMPM.value = ""
    settime.innerHTML = ""
    clearInterval(check)
    playSound = false //stop alarm
    console.log("alarm reset");
}
