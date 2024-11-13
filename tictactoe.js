
//Create 8 winning conditions

//Check win

//go through 8 arrays
//check if 3?

//create 9 arrays for each num
//attach win condition to each array

//each time x or o is made iterate though that and +1 to it


function TicTacToe()
{
    let xArray = [0,0,0,0,0,0,0,0,0];
    let oArray = [0,0,0,0,0,0,0,0,0];

    function PlayerMove(player, pos)
    {
        if(player == 'x')
        {
            xArray[pos] = 1;
        }
        else
        {
            oArray[pos] = 1;
        }

        CheckWin(player, pos);
    }

    function CheckWin(player, pos)
    {
        
    }
}

