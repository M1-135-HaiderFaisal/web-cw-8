let board = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22']
]


let play ="o"

function press(x,y) {
    // Do stuff
    console.log(x,y)
   
   if (play =="o"){
       play="x"
   }else{
       play="o"
   }
   board[x][y]=play
   let cell = document.getElementById(`${x}${y}`);
   cell.innerText =play;



   if(play== board [0][0] && board[0][1]==play && board[0][2]==play){
   console.log(`nice${play}`)}
   
   
   else if(play==board [1][0] && board[1][1]==play &&board [1][2]==play){
       console.log(`nice${play}`)
   }
   else if(play==board [2][0] && board[2][1]==play &&board [2][2]==play){
       console.log(`nice${play}`)
   }
   else if(play==board [0][0] && board[1][0]==play && board[2][0]==play){
       console.log(`nice${play}`)
   }
   else if(play==board [0][1]&& board[1][1]==play && board[2][1]==play){
       console.log(`nice${play}`)
   }
   else if(play==board [0][2] && board[1][2]==play &&board [2][2]==play){
       console.log(`nice${play}`)
   }
   else if(play==board [0][0] && board[1][1]==play && board[2][2]==play){
       console.log(`nice${play}`)
   }
   else if (play==board [0][2] && board[1][1]==play &&board [2][0]==play){
       console.log(`nice${play}`)
   }
}