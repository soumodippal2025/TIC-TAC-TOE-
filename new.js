let boxes=document.querySelectorAll(".box");
let resets=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let messg=document.querySelector(".messg");
let msg=document.querySelector("#msg");
let turnO=true;
let count=0;
let check=false;
let winspatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        count++;
        console.log("box was clicked");
        console.log(count);
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
        
    });

});
const resetgame =() =>{
    turnO=true;
    enablebtn();
    messg.classList.add("hide");
};
const enablebtn =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const disablebtn =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const draw =() =>{
    msg.innerText="Game is draw";
    messg.classList.remove("hide");
    disablebtn();
}

const showWinner =(winner) =>{
    msg.innerText=`Congratuialtions , Winner is ${winner}`;
    messg.classList.remove("hide");
    disablebtn();
}
const checkwinner =() =>{
    
    for(let pattern of winspatterns){
        let post1=boxes[pattern[0]].innerText;
        let post2=boxes[pattern[1]].innerText;
        let post3=boxes[pattern[2]].innerText;
        
        if(post1!=""&&post2!=""&&post3!=""){
            if(post1===post2 && post2===post3){
                console.log("winner",post1);
                showWinner(post1);
                check=true;
            }
        }
        if(count===9 && check===false){
            msg.innerText="Game is draw";
            messg.classList.remove("hide");
            disablebtn();
        }
    }
    
}

newgame.addEventListener("click",resetgame);
resets.addEventListener("click",resetgame);