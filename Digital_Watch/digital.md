```
const start= document.querySelector('#start-btn');
const pause = document.querySelector('#pause-btn');
const reset = document.querySelector('#reset-btn');

let para = document.querySelector('#digital');

let count = 0;
// const id =5; // uncaught typeerror if we assign again in eventistener using const
let id = null;
let startTime;
let currentTime;
let elapsedTime=0;

start.addEventListener("click",()=>{
     if(id!==null){
        return;
    }
    startTime = performance.now();
    console.log(startTime);
   
   id = setInterval(()=>{
    console.log("running");
    currentTime = performance.now();
    console.log(currentTime);

    elapsedTime= savedElapse+(currentTime-startTime);
    console.log(elapsedTime);

    let seconds = elapsedTime/1000;
    seconds = Math.floor(seconds);
    console.log("seconds:",seconds);
    
    let secondsText = String(seconds);
    secondsText=secondsText.padStart(2,"0");

    let rem_milliseconds;
    rem_milliseconds=elapsedTime%1000;
    rem_milliseconds=Math.floor(rem_milliseconds)
    console.log("Remaining milliseconds:",rem_milliseconds);

    let rem_millisecondsText = String(rem_milliseconds)
    rem_millisecondsText=rem_millisecondsText.padStart(3,"0");

    let minutes ;
    minutes = seconds/60;
    minutes=Math.floor(minutes);
    console.log("Minutes:",minutes)

    let minutesText=String(minutes);
    minutesText=minutesText.padStart(2,"0");

    let rem_seconds;
    rem_seconds = seconds%60;
    console.log("remaining_seconds",rem_seconds)

    let rem_secondsText = String(rem_seconds);
    rem_secondsText=rem_secondsText.padStart(2,"0");

    let hours = minutes/60;
    hours = Math.floor(hours);
    console.log("hours:",hours);

    let hoursText = String(hours);
    hoursText=hoursText.padStart(2,"0");

    let rem_minutes;
    rem_minutes = minutes%60;
    console.log("Remaining_minutes:",rem_minutes);

    let rem_minutesText = String(rem_minutes);
    rem_minutesText=rem_minutesText.padStart(2,"0");

   para.textContent=`${hoursText}:${rem_minutesText}:${rem_secondsText}.${rem_millisecondsText}`;
   },10);

   
   console.log(id);
});
let savedElapse=0;

pause.addEventListener("click",()=>{
  if(id===null){
    return;
  }
  clearInterval(id);
  id = null;  // it represents no active interval
  savedElapse = elapsedTime;
});

reset.addEventListener("click",()=>{
clearInterval(id);
id = null;
elapsedTime = 0;
savedElapse= 0;
para.textContent="00:00:00.000"
});
```