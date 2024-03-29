const player = "X"
const computer = "O"

let board_full = false;
var play_board = ["","","","","","","","",""];

const board_container = document.getElementById("play-area");

const render_board = () =>{
    board_container.innerHTML = "";
    play_board.forEach((val, index) => {
        board_container.innerHTML += `<div id="block_${index}" class="block" onclick="addPlayerMove(${index})">${play_board[index]}</div>`;

        if (val === "X" || val === "O")
        {
            document.querySelector(`#block_${index}`).classList.add("occupied");
        }
    })
};

const addPlayerMove = index => {
    if(!board_full && play_board[index] === ""){
        play_board[index] = player;
        game_func();
        addComputerMove();
    }
};

const addComputerMove = () => {
   if (!board_full) {
       let selected;
       do {
           selected = Math.floor(Math.random() * 9);
       }while (play_board[selected] != "");

       play_board[selected] = computer;
       game_func();
   }
};

const check_board_complete = function() {
    let flag = false;
    //iderate over ...
    play_board.forEach (value =>{
        if(value == ""){
            flag = true;
        }
    });
    board_full = !flag;
}

const game_func = () =>{
    render_board();
    check_board_complete();
    check_for_winner();
}



const check_line = (posA ,posB ,posC) => {
    if(play_board[posA] !==""){

    return ( play_board[posA] === play_board[posB] && 
        play_board[posB] === play_board[posC])
    }
    return false;
}

const winner_statement = document.getElementById("winner");

const check_for_winner = () => {
    let result = check_match();

    if (result === player) {
        winner_statement.innerText = "player Win!!!"
        winner_statement.classList.add("playerWin");
        board_full = true
    }
    else if (result === computer){
        winner_statement.innerText = "computer Win :("
        winner_statement.classList.add("computerWin");
        board_full = true
    }
    else if (board_full){
        winner_statement.innerText = "Draw!!!";
        winner_statement.classList.list.add("draw");
    }
};

const check_match = () => {
    for(let index =0; index < play_board.length; index +=3){
        //how do we check the cerent rowwww??????????????????
        if(check_line(index, index + 1, index + 2)){
            return play_board[index];
        }
    }
    for(let index =0; index < 3; index++){
        //how do we check the cerent rowwww??????????????????
        if(check_line(index, index + 3, index + 6)){
            return play_board[index];
        }
        
    }
   if (check_line(0, 4, 8)){
       return play_board[0];
   }
   
   if (check_line(2, 4, 6)){
    return play_board[2];
}
return false;
};




const reset_board = () => {
    play_board = ["", "", "", "", "", "", "", "",""];
    board_full = false;

  winner_statement.innerText = "";
  winner_statement.classList.remove("playerWin", "computer", "draw")
  render_board();
}

render_board();