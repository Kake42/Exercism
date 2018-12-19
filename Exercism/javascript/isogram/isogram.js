export function isIsogram(iso){
    var temp = iso.toLowerCase().split("").sort().join("");
    var result = false;
    var regexp = new RegExp(/([a-z])\1+/g);
    //if value does not have duplicated values, set to true
    if(!(regexp.test(temp))) result = true;
    return result;
}
