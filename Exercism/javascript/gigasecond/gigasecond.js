export function gigasecond(date) {
    var gigasecond = 1000000000;
    var gsDate = date;
    gsDate.setSeconds(gsDate.getSeconds()+gigasecond);
    return gsDate;
} 
