
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

    function PlayerMove(player, posX, posY)
    {
        board[posX][posY] = player;
        CheckWin(player, posX, posY);
    }

    function CheckWin(player, posX, posY)
    {
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

    return {PlayerMove, CheckWin};
}

let game = TicTacToe();

game.PlayerMove('x', 0, 1);
game.PlayerMove('o', 0, 0);
game.PlayerMove('x', 1, 1);
game.PlayerMove('o', 1, 0);
game.PlayerMove('x', 2, 1);


