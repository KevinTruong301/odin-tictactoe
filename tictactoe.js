
//Create 8 winning conditions

//Check win

//go through 8 arrays
//check if 3?

//create 9 arrays for each num
//attach win condition to each array

//each time x or o is made iterate though that and +1 to it


function TicTacToe()
{
    let board = [[],[],[]];
    let turn = true; //true is X false is O

    function GetPlayerTurn()
    {
        return turn;
    }

    function PlayerMove(posX, posY)
    {
        let player = 'x';
        if(turn)
        {
            player = 'x';
        }
        else
        {
            player = 'o';
        }
        turn = !turn;
        board[posX][posY] = player;
        return CheckWin(player, posX, posY);
    }

    function CheckWin(player, posX, posY)
    {
        console.log(player + " " + posX + " " + posY);
        //board check x
        let row = 0;
        let column = 0;
        let diag = 0;
        let antiDiag = 0;

        for(let i = 0; i < 3; i++)
        {
            if(board[posX][i] == player)
            {
                column += 1;
            }
        }

        for(let i = 0; i < 3; i++)
        {
            if(board[i][posY] == player)
            {
                row += 1;
            }
        }


        for(let i = 0; i < 3; i++)
        {
            if(board[i][i] == player)
            {
                diag += 1;
            }
        }

        for(let i = 0; i < 3; i++)
        {
            if(board[i][2-i] == player)
            {
                antiDiag += 1;
            }
        }
        return row == 3 || column == 3 || diag == 3 || antiDiag == 3;
    }

    function ResetBoard()
    {
        board = [[],[],[]];
    }

    return {PlayerMove, CheckWin, GetPlayerTurn};
}

let ticTacToe = TicTacToe();

function PlayerMove(evt){
    if(evt.currentTarget.textContent != "X" && evt.currentTarget.textContent != "O")
    {
        evt.currentTarget.textContent = ticTacToe.GetPlayerTurn() ? "X" : "O";
        let isWin = ticTacToe.PlayerMove(evt.currentTarget.posX, evt.currentTarget.posY);
        console.log(isWin);
    }
}

function CreateSquare(posX, posY){

    let tictactoeGrid = document.querySelector("#tictactoe-grid");

    let square = document.createElement("div");

    square.style.width = "100px";
    square.style.height = "100px";
    square.style.border = "black solid 1px";
    
    square.addEventListener("click", PlayerMove);

    square.posX = posX;
    square.posY = posY;

    tictactoeGrid.appendChild(square);
}

function PopulateTicTacToeGrid(){
    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
        {
            CreateSquare(i, j);
        }
    }
}
PopulateTicTacToeGrid();