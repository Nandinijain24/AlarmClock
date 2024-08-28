

let playSound = true;
console.log(playSound)

setInterval(() => {
     let time = new Date()
     timing.innerHTML = time.toLocaleTimeString()
}, 1000)

function setAlarm() {
     let h = hours.value;
     let m = min.value;
     settime.innerHTML = h + ":" + m + ":" + "00"
     console.log(settime)
}
let check;

playSound = true
if (playSound) {
     function startAlarm() {
         
          console.log(playSound)
          check = setInterval(() => {
                
               let alarmtime = settime.innerHTML;
               alarmtime = alarmtime.split(":");
               let alarmhours = alarmtime[0];
               let alarmminute = alarmtime[1];
               let systemTime = new Date();
               let systemhours = systemTime.getHours();
               let systemminute = systemTime.getMinutes();


               if (systemhours > 12) {
                    systemhours = systemhours - 12;
               }

               if (alarmhours == systemhours && alarmminute == systemminute) {
                    alarmsound.play();
                    console.log("started")
               }

          }, 5000)
     }
} // Run the  alarm in every 8 seconds if user is not stopping it



const stopbtn = document.getElementById('stopbtn');

stopbtn.onclick = function () {
    
          playSound = false
          console.log(alarmsound)
          console.log("ended")
          console.log(playSound);
          
          alarmsound.pause();
          alarmsound.currentTime = 0;//reset the alarm sound 
          clearInterval(check)
          settime.innerHTML = ""

     // setTimeout(()=>{
     //      alarmsound.play();
     // },9000);
};


startAlarm()