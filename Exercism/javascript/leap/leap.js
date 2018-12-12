export const isLeap = (year) => {
    
    let divF = false;
    let divFH = false;
    let divH = false;
    let result = false;

    if ((year % 4) == 0) { divF = true;}
    if ((year % 100) == 0 ) { divH = true;}
    if ((year % 400) == 0 ) { divFH = true;}

    if (divF && !divH){
        result = true;
    }
    else if (divF && divFH){
        result = true;
    }
    else{
        result = false;
    }

    return result;
} 
