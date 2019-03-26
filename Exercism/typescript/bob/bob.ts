class Bob {
    /** 
     * BOB responses
     * If addressing bob with a question: reply is "Sure."
     * If yelling at bob: reply is "Whoa, chill out!"
     * If yelling a question at bob: reply is "Calm down, I know what I'm doing!"
     * If addressing bob with an empty phrase: reply is "Fine. Be that way!"
     * All other replies are "Whatever (default)"
    */
    hey(phrase:string) {
        phrase = phrase.trim();

        var response: string = "Whatever.";
        if(phrase.slice(-1) === "?"){
            response = "Sure.";
        }
        if(phrase.toUpperCase() === phrase && phrase.match(/[a-z]/i)){
            response = "Whoa, chill out!";
        }
        if(phrase.slice(-1) === "?" && response === "Whoa, chill out!"){
            response = "Calm down, I know what I'm doing!";
        }
        if(phrase.length === 0){
            response = "Fine. Be that way!";
        }
        return response;
    }
}
export default Bob