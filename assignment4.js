// first problem
// this function is used calculate some easy calculations, used only for positive number,
// else it would give a error message
function mindGame(num)

{
    let newNumber = 0;
   if(num < 0)
   {
    return "Enter valid positive number.";
    
   } 
   else{
    newNumber =(( (num*3) +10 ) / 2) -5;
    return newNumber;
   }
   
   
}




// second problem
//used to find out if the string has even or odd numbers of characters//
function evenOdd(text) 
{
        if(typeof text !== 'string')
        {
           return "Enter valid string";
        }
    
       else if(text.length % 2 == 0)
        {
            return "Even";

        }
        else{
            return "Odd";
        }
    

}


// third problem
//this function determines if the diffrence is larger or smaller than 7//
function isLGSeven(num1) 

{
    let difference = num1 - 7 ;
    if(typeof num1 !== 'number')
    {
        return "Enter number not string or character type data";
    }
    else if( difference >= 7)
    { 
        
        return num1 *2 ;
    }
    else
    {
        return difference;
    }

}



//fourth problem
//this function count the number of negetive number contained in the array
function findingBadData(text2)
{
    let count = 0;
    for(let i=0; i<text2.length; i++)
    {
        if(text2[i]< 0)
        {
            count++;
            
        }
        
    }
    return count;
}


//fifth problem
//converts the gems to diamond and for negetive input gives error;
 function gemsToDiamond(first, second, third)
 {
    let totalGem = (first*21) + (second * 32) + (third * 43);
    if( first<0 || second <0 || third < 0)
    {
        return "Invalid gem";
    }
    else if(totalGem > 1000*2)
    {
        return totalGem - 2000;
    }
    else {
        return totalGem;
    }
 }
