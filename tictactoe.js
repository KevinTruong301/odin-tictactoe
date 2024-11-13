
//Create 8 winning conditions

//Check win

//go through 8 arrays
//check if 3?

//create 9 arrays for each num
//attach win condition to each array

//each time x or o is made iterate though that and +1 to it

function WinCondition(){
    let winCount = 0; // if this equals 3 then target has won

    function Add()
    {
        winCount += 1;
    }

    function IsWin()
    {
        return winCount >= 3;
    }

    return {Add, IsWin};
}

function CheckWin()
{

}