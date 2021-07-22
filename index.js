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
    }
};

const check_match = () => {

}

render_board();