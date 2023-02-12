function reverseString(text)

{
  let reversed = '';
  for(let i = text.length-1 ; i>=0 ; i--)
  {
    const element = text[i];
    reversed = reversed + element;
  }
  return  reversed;
}
const newText = 'Fuck U';
const reverse = reverseString(newText);
console.log(reverse);