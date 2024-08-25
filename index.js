setInterval(() => {
     let time= new Date()
     timing.innerHTML=time.toLocaleTimeString()
}, 1000)

function setAlarm(){
     let h=hours.value;
     let m=min.value;
     settime.innerHTML=h+ ":" + m +":"+ "00"
}