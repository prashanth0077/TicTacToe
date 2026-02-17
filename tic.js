let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameButton = document.querySelector("#new-btn");


let turnO=true; // alternative turn turnX, turnO
let winPatterns =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];

const resetGame =()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turnO){
            box.innerText="O";
            turnO= false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled =true;
        checkwinner();
    })
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled= true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText ="";
    }
};

const showWinner= (winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkwinner=()=>{
    for(let pattern of winPatterns ){
        // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);

        let posval1= boxes[pattern[0]].innerText;
        let posval2= boxes[pattern[1]].innerText;
        let posval3= boxes[pattern[2]].innerText;
        if (posval1 != "" && posval2 !="" && posval3 !=""){
            if(posval1==posval2 && posval2==posval3){
                console.log("Winner",posval1);
                // box.disabled =true;
                showWinner(posval1);
            }
        }
    }
}

newGameButton.addEventListener("click",resetGame );
resetButton.addEventListener("click",resetGame );

// resetButton.forEach((btn) => {
//     btn.addEventListener("click", resetGame);
// });