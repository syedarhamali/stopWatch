var minutes = 0;
var seconds = 0;
var miliseconds = 0;
var minText = document.getElementById('min');
var secText = document.getElementById('sec');
var msecText = document.getElementById('msec');
var Interval;

function timer(){
    miliseconds++
    msecText.innerHTML = miliseconds;
    if (miliseconds >= 100){
        seconds++
        secText.innerHTML = seconds
        miliseconds = 0
    }
    if(seconds >= 60){
        minutes++
        minText.innerHTML = minutes
        seconds = 0
    }
}

function start(){
Interval = setInterval(timer,10);
document.getElementById('startbtn').disabled = true;
}

function pause(){
    Interval = clearInterval(Interval)
    document.getElementById('startbtn').disabled= false;
}

function reset(){
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    minText.innerHTML = minutes
    secText.innerHTML = seconds
    msecText.innerHTML = miliseconds
    pause()
}