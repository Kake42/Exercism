function Raindrops(number){
    
    //this.number = number;
    //let result = '';

   this.convert = function(number) {
        this.number = number;

        let result = '';
        if(0 == this.number % 3) {
            result = 'Pling';
        } 
        if (0 == this.number % 5) {
            result += 'Plang';
        } 
        if (0 == this.number % 7) {
            result += 'Plong';
        }
        if (result == '') {
            result = this.number.toString();
        }
        return result;   
   }
}

export default Raindrops;