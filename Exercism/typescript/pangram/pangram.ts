class Pangram{

    /**
     * A pangram is a sentence that contains every letter 
     * of the alphabet. This class tests for that condition
     *   */
    sequence: string;
    constructor (sentence:string){
        this.sequence = sentence.toLowerCase().replace(/[^a-z]/g, "");
    }
    
    isPangram(){
        var array: string[] = this.sequence.split("").sort();

        array = array.filter( function(item: string, index: number, self){
            return self.indexOf(item) === index;
        });

        if(array.length === 26){
            return true;
        } 
        return false;
    }
}
export default Pangram;