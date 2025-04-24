let boxes = document.querySelectorAll(".box");
let h3=document.querySelector("h3");
let turn = "X";
let resetbtn =  document.querySelector("#reset");
const changeTurn = ()=>{
    return turn === "X" ? "0" :"X";
}

resetbtn.addEventListener("click",()=>{
  for(let box of boxes){
        box.style.pointerEvents="auto";
        box.innerText="";
        h3.innerText="";
      }  
})

let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
     ]

const checkwin = ()=>{
        for(let pattern of wins){
            pos1 = boxes[pattern[0]].innerText;
            pos2 = boxes[pattern[1]].innerText;
            pos3 = boxes[pattern[2]].innerText;
            if(pos1!=""&&pos2!=""&&pos3!=""){
              if(pos1===pos2 && pos2===pos3){
                  showwinner(pos1);
                  for(let box of boxes){
                         box.style.pointerEvents="none";
                      }
              }
            }
          };
         }
         const showwinner=(winner)=>{
                   h3.innerText= `Congratulations, Winner is ${winner}`;
         }
         
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      box.innerText = turn;
      turn = changeTurn();
      checkwin();
    
    }
   
  });
});

