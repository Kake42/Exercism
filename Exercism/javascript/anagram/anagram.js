//given a word, and a list, return the correct list of anagrams for that word
//create list of anagrams using word (??)
function Anagram(word){ 
    
    this.word = word.toLowerCase();
    let newList = [];
    let newWord = this.word.split("").sort().join();
    
    this.matches = function(list){
        this.list = list;
        let temp = "";

        for(let i in list){
            temp = this.list[i].toLowerCase().split("").sort().join();
            if(this.word === this.list[i].toLowerCase()){
                //newList.pop();
                continue;
            }
            if(temp === newWord) {
                newList.push(this.list[i]);
            }
        }
        return newList;
    }
}

export default Anagram;