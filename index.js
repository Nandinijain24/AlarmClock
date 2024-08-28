setInterval(() => {
     let time= new Date()
     timing.innerHTML=time.toLocaleTimeString()
}, 1000)

function setAlarm(){
     let h=hours.value;
     let m=min.value;
     settime.innerHTML=h+ ":" + m +":"+ "00"
}
let check=setInterval(() =>{
     let alarmtime= settime.innerHTML;
     alarmtime=alarmtime.split(":");
     let alarmhours=alarmtime[0];
     let alarmminute=alarmtime[1];
     let systemTime=new Date();
     let systemhours=systemTime.getHours();
     let systemminute=systemTime.getMinutes();

     if(systemhours>12){
          systemhours=systemhours-12;
     }
     if(alarmhours==systemhours && alarmminute==systemminute){
          alarmsound.play();
     }
    
    
   
},1000)



const stopbtn=document.getElementById('stopbtn');

stopbtn.onclick=function(){
     alarmsound.pause();
     alarmsound.currentTime=0;//reset the alarm sound 


setTimeout(()=>{
     alarmsound.play();
},9000);
};
