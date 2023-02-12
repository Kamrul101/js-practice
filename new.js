// first problem
// function is used to calculate some easy calculations

function mindGame(a)
{
    let newNum = 0;
   if(a < 0)
   {
    return "Enter positive number!";
    
   } 
   else{
    newNum =(( (a*3) +10 ) / 2) -5 ;
    return newNum;
   }
   
}



// second problem
//to find out if the string has even or odd numbers of characters//
function evenOdd(text) 
{
       
       if(text.length % 2 == 0)
        {
            return "Even";
        }
        else{
            return "Odd";
        }
    

}


// third problem
//function determines if the diffrence is larger or smaller than 7
function isLGSeven(num) 
{
    const difference = num - 7 ;
    if(typeof num !== 'number')
    {
        return "Enter valid number";
    }
    else if( difference >= 7)
    {      
        return num * 2 ;
    }
    else
    {
        return difference;
    }

}



//fourth problem
//function counts the number of negetive number contained in the array
function findingBadData(arr)
{
    let count = 0;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]< 0)
        {
            count = count + 1;
            
        }
        
    }
    return count;
}


//fifth problem
//converts the gems to diamond
 function gemsToDiamond(first, second, third)
 {
    const diamond = (first*21) + (second * 32) + (third * 43);
    if( first < 0 || second < 0 || third < 0)
    {
        return "Gem can not be negetive!!";
    }
    else if(diamond > 1000*2)
    {
        return diamond - 2000;
    }
    else {
        return diamond;
    }
 }
