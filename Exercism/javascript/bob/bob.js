/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
    
    let result = "";
    let questReg = new RegExp("^.*\\?+\\s*$");
    let yell1 = new RegExp(/[A-Z]+!?$/g);
    let yell2 = new RegExp(/^[^a-z]+!+?$/g);
    let testYell = new RegExp("^[^a-z]*");
    let noState = new RegExp("^\\s*$");

    if(questReg.test(message)){
        result = "Sure.";
        if(yell1.test(message) || (/^[A-Z][^a-z]/).test(message)){ 
            result = "Calm down, I know what I'm doing!"; }
    }
    else if(yell1.test(message) || yell2.test(message)){
        result = "Whoa, chill out!";
    }
    //fine be that way (address but dont say anything)
    else if(noState.test(message)){
        result = "Fine. Be that way!";
    }
    else {
        result = "Whatever.";
    }
    return result;
};
