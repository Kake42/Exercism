export function compute(strand1, strand2) {
    let difference = 0;
    //test to see if the strands are empty/same, if they are return 0
    if (strand1.length != strand2.length){
        throw new Error('left and right strands must be of equal length');
    }
    if (strand1 == strand2){
        return difference;
    } else {
        for (let i = 0; i < strand1.length; i++){
            let n = strand1.charAt(i).localeCompare(strand2.charAt(i));  
            if(n == -1 || n == 1) difference++;          
        }
    }
    return difference;   
}
