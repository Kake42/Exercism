let romanNum = '';

export function toRoman(number){
    
    let thousands_pl = Math.floor(number/1000%10);
    let hundreds_pl = Math.floor(number/100%10);
    let tens_pl = Math.floor(number/10%10);
    let ones = Math.floor(number%10);// - thousands_pl - hundreds_pl - tens_pl;

    romanNum ='';
    if(thousands_pl != 0 ) placeholders(thousands_pl, 'M', 'D', 'C');
    if(hundreds_pl != 0 ) placeholders(hundreds_pl, 'C', 'D', 'M');
    if(tens_pl != 0 ) placeholders(tens_pl, 'X', 'L', 'C');
    placeholders(ones, 'I', 'V', 'X');

    return romanNum;

}

function placeholders(placeholder, num_opt1, num_opt2, num_opt3){
    if(placeholder <= 3){
        for(let i = 1; i <= placeholder; i++){
            romanNum += num_opt1;
        }
    } else if (placeholder == 4){
        romanNum += num_opt1;
        romanNum += num_opt2;
    } else if (placeholder <= 8){
        romanNum += num_opt2;
        for(let i = 0; i < placeholder - 5; i++){
            romanNum += num_opt1;
        }
    } else if (placeholder == 9) {
        romanNum += num_opt1;
        romanNum += num_opt3;
    }
}



