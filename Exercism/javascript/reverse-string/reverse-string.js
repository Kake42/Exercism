export const reverseString = (string) => {

   let resultstring = '';
   let regex = new RegExp("/\\s*/");

   if (regex.test(string)){
        return string;
   }
   else {
        for (let i = string.length - 1; i >= 0; i--){
            resultstring += string.charAt(i);
        }
        return resultstring;
    }
}