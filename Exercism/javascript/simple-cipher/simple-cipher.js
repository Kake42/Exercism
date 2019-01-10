export function Cipher(key){
    
    let rando;
    let keyTest = new RegExp("[A-Z0-9|\s+\-]");
    let messit = 0;
    let newmess = '';
    let keyit = '';

    if((/^\s*$/).test(key)){
        throw new Error('Bad key');
    } 

    //if there isn't a key passed in, create a key
    if (!key) {
        //generate random key of 100 characters
        key = '';
        for (let i = 0; i < 100; i++){
            rando = Math.floor((Math.random() * 25) + 97);
            key += String.fromCharCode(rando);
        }         
    } else if (keyTest.test(key)){
        throw new Error('Bad key');
    } 

    this.key = key;
    
    //look at code below
    //need to encode
    this.encode = function(message) {
        let q = 0;
        this.message = message;
        newmess = '';
        for (let j = 0; j < this.message.length; j++){

            //if key end has been reachend and message continues
            //reset key iterator
            if (j >= this.key.length){
                keyit = ((key.charAt(q)).charCodeAt(0) - 97);
                q++;
                if (q >= this.key.length) q = 0;
            } else {
                //get current key iteration code for shift
                keyit = ((key.charAt(j)).charCodeAt(0) - 97);
            }
            //get current message iteration code and add shift
            messit = (this.message.charAt(j)).charCodeAt(0) + keyit;
    
            //if shift goes over 122, reset it to 0 and continue
            if (messit > 122) {
                let shift = (messit - 122);
                messit = 96 + shift;              
            }
            newmess += String.fromCharCode(messit);
        }

       // console.log(newmess);
        return newmess;       
    }

    //reverse what encode function did
    this.decode = function(message) {
        this.message = message;
        newmess = '';
        for (let m = 0; m < this.message.length; m++){

            //get current key iteration code for shift
            keyit = ((key.charAt(m)).charCodeAt(0) - 97);

            //get current message iteration code and minus shift
            messit = (this.message.charAt(m)).charCodeAt(0) - keyit;

            //if shift goes under 97, reset it to 122 and continue
            if (messit < 97) {
                let shift = (97 - messit);
                messit = 123 - shift;              
            }

            newmess += String.fromCharCode(messit);
        }

        return newmess;
    }
}