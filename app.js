let td=document.querySelector('.timerdisplay');
let stop=document.getElementById('stop');
let start=document.getElementById('start');
let reset=document.getElementById('reset');


let ms=0;
let s=0;
let min=0;

let timerid=null;

start.addEventListener('click', ()=>{

    if(timerid !== null){
        clearInterval(timerid);
    }

    timerid = setInterval(starttimer, 10);
});

stop.addEventListener('click', function(){
    clearInterval(timerid);
    timerid=null;
});

reset.addEventListener('click', function(){
    clearInterval(timerid);
    td.innerHTML=`00:00:00`;
    ms=0;
    s=0;
    min=0;
});

function starttimer(){
    ms++;
    if(ms==100){
        ms=0;
        s++;
        if(s==60){
            s=0;
            min++;
        }
    }

    let msstring=ms<10 ? `0${ms}` : ms;
    let sstring=s<10 ? `0${s}` : s;
    let minstring=min<10 ? `0${min}` : min;

    td.innerHTML=`${minstring}:${sstring}:${msstring}`;

}