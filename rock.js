let userscore=0;
let computerscore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
let userscorepara=document.querySelector("#userscore");
let computerscorepara=document.querySelector("#computerscore");


// let opening=document.getElementById("foropening");
// // let hidden=document.getElementsByClass(".hidden");

const winner=(userwon,usermove,computermove)=>{
    if(userwon===true){
        userscore++;
        userscorepara.innerText=userscore;
        // console.log("user won");
        msg.innerText=`USER WON \n COMPUTER IS ${computermove} `;
    }
    else{
        computerscore++;
        computerscorepara.innerText=computerscore;
        // console.log("computer won");
         msg.innerText=`COMPUTER WON it is ${computermove}`;
    }


}


const computergame=()=>{
    const options=["rock","paper","scissors"];
    const randnum=Math.floor(Math.random()*3);
    return options[randnum];
}
//down is game
const usergame=(usermove)=>{
     console.log("user choice =",usermove);
     let computermove=computergame();
     console.log("computer choice =",computermove);
     if(usermove===computermove){
        console.log("Draw");
         msg.innerText=" DRAW";
     }
     else{
        let userwon=true;
        if(usermove==="rock"){
           userwon= computermove==="paper"?false:true;
        }
        if(usermove==="paper"){
           userwon=computermove==="scissors"?false:true;
        }
        if(usermove==="scissors"){
            userwon=computermove==="rock"?false:true;
        }
        // console.log("user:",userwon);
        winner(userwon,usermove,computermove);
     }

}





choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        usermove=choice.getAttribute("id");
        usergame(usermove);
       
    });


});
let menu = document.getElementById("menu");
let drop = document.getElementById("dropdown");

menu.onclick = function () {
    drop.style.display =
        drop.style.display === "block" ? "none" : "block";
};

