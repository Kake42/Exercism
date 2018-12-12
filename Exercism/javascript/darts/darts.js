export const solve = (x ,y) => {

    let newx = Math.abs(x)
    let newy = Math.abs(y)
    let result = 0;

    if (Number.isNaN(Number(newx)) || Number.isNaN(Number(newy))){
        return null;
    }

    //if player lands dart in inner circle
    //player earns ten points
    if (newx <= 1 && newy <=1 ){
        result = 10;
    }
    else if (newx <= 5 && newy <= 5 ){
        result = 5;
    }
    else if (newx <= 10 &&  newy <= 10 ){
        result =  1;
    } 

    return result;
} 
