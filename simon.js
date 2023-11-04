let level=0;
let gameseq=[];
let userseq=[];
let started=false;
let h2=document.querySelector('h2');
let btns=["yellow","red","purple","green"];
document.addEventListener("keypress" , function() {
    if(started==false){
        console.log("Game started");
        started=true;
        levelup();
    }
});
function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },250);
};
function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash')
    },250);
};
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level${level}`;
    let randidx=Math.floor(Math.random()*4);
    let randclr=btns[randidx];
    let randbtn=document.querySelector(`.${randclr}`);
    // console.log(randidx);
    // console.log(randclr);
    // console.log(randbtn);
    gameseq.push(randclr);
    console.log(gameseq);
    btnFlash(randbtn);
}
function checkans(idx){
    // console.log("curr level is:",level);
    // let idx=level-1;
    if(userseq[idx]==gameseq[idx]){
        // console.log("Same value");
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
            // levelup();
        }
        else{

        }
    }
    else{
        // console.log("Game Over! Press andy to start");
        h2.innerText=`Game Over!Your score was ${level} Press any key to start`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },150);
        reset();
    }

}
function btnpress(){
    // console.log("Button was pressed");
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute('id');
    userseq.push(usercolor);
    checkans(userseq.length-1);
    // console.log(userseq);
}
let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener('click',btnpress);
}
function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}